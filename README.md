# Nina & Alex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deploy
git checkout gh-pages
git merge main
ng build --output-path docs --base-href /wedding_nina-alex/

https://angular.io/guide/deployment


Or new:
ng deploy --base-href=wedding_nina-alex
https://efficientuser.com/2021/03/04/how-to-deploy-angular-app-on-github-pages-for-free/

Serve english version: `ng serve --configuration=en`
Serve general version: `ng serve`

Generating base translation file:
ng extract-i18n --output-path src/locales

- add en.yml file (see akl)
    - in package.json, add: "translate": "ng extract-i18n --output-path src/locales && cp src/locales/messages.xlf src/locales/messages.en.xlf && xlf-translate --lang-file ./src/locales/en.yml ./src/locales/messages.en.xlf"
    --> "deploy": "npm run translate &&  ng deploy --base-href=wedding_nina-alex --localize && cp src/redirect/index.html dist/index.html"
    -->   Not working: --localize is not an option of ng deploy


## Translate
To apply latest translations in da.yml run `npm run translate`
- deploy with both translations!
