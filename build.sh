# Build the Next app into ./.next
npx next build;
# Export the Next app into ./out
npx next export;

# Workaround for Chrome, who prevents loading of paths starting with underscore.
mv ./out/_next ./out/next
cd ./out && grep -rli '_next' ./* | find ./ -type f -exec sed -i -e 's/_next/next/g' {} \;
