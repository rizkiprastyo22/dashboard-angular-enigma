# Langkah membuat project setelah ng new

# 1. generate module dan component dalam shared
- karena component seperti header dan footer dipakai berulang, kedua component ini disimpan dalam shared
- yang perlu diperhatikan yang dibuat module shared dulu, baru component
dalam shared

```
ng generate module shared

ng generate component shared/header --skip-tests

ng generate component shared/footer --skip-tests
```

# 2. export component dalam shared.module.ts lalu import di app.module.ts
- lalu component dalam shared ini harus diexport karena nantinya akan diimport pada app.module.ts

```
const components = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
```

- lalu import module di app.module.ts
```
imports: [
    BrowserModule,
    SharedModule
  ]
```

# 3. (opsional) install extensions di vs code
- Angular Language Service
- Angular Snippets (Version 13)
- Angular Spec Generator

# 4. tes panggil component di app.component.html
```
<app-header></app-header>

<h1>App Component</h1>

<app-footer></app-footer>
```

# 5. buat folder pages yang berisi component yang berubah-ubah
- contoh component pertama yang mau dibuat di views adalah home

```
ng generate module views

ng generate component views --skip-tests
ng generate component views/home --skip-tests
```

# 6. buat module home dan component dalam home
```
ng generate module views/dashboard
ng g c views/dashboard

ng generate component views/dashboard/banner/dashboard-banner --flat --skip-tests
ng generate component views/dashboard/newsletter/dashboard-newsletter --flat --skip-tests
ng generate component views/dashboard/service/dashboard-service --flat --skip-tests
ng generate component views/dashboard/about/dashboard-about --flat --skip-tests
ng generate component views/dashboard/faq/dashboard-faq --flat --skip-tests
ng generate component views/dashboard/instructors/dashboard-instructors --flat --skip-tests
ng generate component views/dashboard/contact/dashboard-contact --flat --skip-tests
```

# 7. jangan lupa import export tapi dengan cara lebih bagus

home.module.ts
```
@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeNewsletterComponent,
    HomeServiceComponent,
    HomeAboutComponent,
    HomeFaqComponent,
    HomeInstructorsComponent,
    HomeContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
```

pages.module.ts
```
@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
```

app.module.ts
```
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Nb: Diharapkan teliti, TIDAK BOLEH EXPORT FILE SENDIRI!!!

# 8. penambahan framework css pada angular kita


