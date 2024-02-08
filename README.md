## How to reproduce the issue

```sh
npm i
# Open `src/app/button-social/button-social-facebook.tsx`
# Format all files
npx prettier --write .
# Format the open file
npx prettier --write ./src/app/button-social/button-social-facebook.tsx
```
