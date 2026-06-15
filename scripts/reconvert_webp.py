#!/usr/bin/env python3
"""
Back up existing WebP files under `public/images` and regenerate WebP
from original JPEGs found under `D:/hussain/mehndi`.

Behavior:
- Copies current .webp files to a timestamped backup folder.
- For each .jpg/.jpeg under originals_root, writes a lossless WebP with
  the same relative path into target_root (overwriting existing .webp).

Note: This script uses Pillow and may produce larger files when using
lossless conversion. Review the backup folder before removing it.
"""
import os
import shutil
from datetime import datetime
from PIL import Image

ORIGINALS_ROOT = r"D:/hussain/mehndi"
TARGET_ROOT = r"D:/hussain/mehndi/site/public/images"

def make_backup(root):
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_root = os.path.join(os.path.dirname(root), f"images_backup_reconv_{ts}")
    print("Creating backup at:", backup_root)
    for dirpath, _, filenames in os.walk(root):
        for fn in filenames:
            if fn.lower().endswith('.webp'):
                rel = os.path.relpath(dirpath, root)
                dest_dir = os.path.join(backup_root, rel)
                os.makedirs(dest_dir, exist_ok=True)
                src = os.path.join(dirpath, fn)
                dst = os.path.join(dest_dir, fn)
                shutil.copy2(src, dst)
    return backup_root

def regen_from_jpegs(orig_root, target_root, lossless=True, quality=100):
    converted = 0
    skipped = 0
    for dirpath, _, filenames in os.walk(orig_root):
        for fn in filenames:
            if fn.lower().endswith(('.jpg', '.jpeg')):
                rel = os.path.relpath(dirpath, orig_root)
                name, _ = os.path.splitext(fn)
                src = os.path.join(dirpath, fn)
                dest_dir = os.path.join(target_root, rel)
                os.makedirs(dest_dir, exist_ok=True)
                dest = os.path.join(dest_dir, name + '.webp')
                try:
                    with Image.open(src) as im:
                        im.save(dest, 'WEBP', lossless=lossless, quality=quality)
                    converted += 1
                except Exception as e:
                    print('ERROR converting', src, e)
                    skipped += 1
    return converted, skipped

def main():
    import argparse
    parser = argparse.ArgumentParser(description='Reconvert JPEGs to WebP with backup')
    parser.add_argument('--mode', choices=['lossless', 'lossy'], default='lossless', help='Conversion mode')
    parser.add_argument('--quality', type=int, default=90, help='Quality for lossy WebP (0-100)')
    parser.add_argument('--no-backup', action='store_true', help='Do not backup existing webp files')
    args = parser.parse_args()

    print('Starting reconversion process — mode:', args.mode, 'quality:', args.quality)
    if not os.path.isdir(TARGET_ROOT):
        print('Target root does not exist:', TARGET_ROOT)
        return
    backup = None
    if not args.no_backup:
        backup = make_backup(TARGET_ROOT)
        print('Backup complete at', backup)
    else:
        print('Skipping backup as requested')

    lossless = args.mode == 'lossless'
    q = args.quality if not lossless else 100
    print('Regenerating WebP from originals... (lossless=%s, quality=%s)' % (lossless, q))
    converted, skipped = regen_from_jpegs(ORIGINALS_ROOT, TARGET_ROOT, lossless=lossless, quality=q)
    print(f'Done. Converted: {converted}, Skipped/Errors: {skipped}')
    print('New WebP files are in', TARGET_ROOT)
    if backup:
        print('Old WebP backup is in', backup)

if __name__ == '__main__':
    main()
