Upload Instructions: 
1) grunt server (to concat css)
2) aws s3 sync . s3://www.coding4kicks.com (from app folder; for non www too)
3) aws s3 sync styles s3://www.coding4kicks.com/styles/ (from .tmp folder)

TODO: figure out issue with the build -> dist upload.

