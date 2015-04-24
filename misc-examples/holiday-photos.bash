find . -iname '*.jp*g' -print0 \
 | xargs -0 -L 1 -I @ \
   identify -format '%[EXIF:DateTime] %d/%f\n' @ \
 | egrep '^[[:digit:]]{4}:12' \
 | cut -d' ' -f3- \
 | tar -cf december.tar -T -
 