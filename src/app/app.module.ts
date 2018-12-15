import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BlockComponent } from './components/block/block.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'fileupload', component: FileuploadComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: 'users', component: BlockComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    GalleryComponent,
    FileuploadComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
