git checkout gh-pages
git pull origin main
npm run build
rm -rf docs
mv dist docs
git add docs
git commit -m "updated deployment"
git push origin gh-pages