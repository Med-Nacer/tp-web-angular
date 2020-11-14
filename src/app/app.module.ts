import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';
import { CvComponentComponent } from './components/cv-component/cv-component.component';
import { ListComponentComponent } from './components/list-component/list-component.component';
import { ItemComponentComponent } from './components/item-component/item-component.component';
import { DetailComponentComponent } from './components/detail-component/detail-component.component';
import { TodoComponentComponent } from './components/todo-component/todo-component.component';
import { ImagePathPipe } from './pipes/image-path/image-path.pipe';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    ListComponentComponent,
    ItemComponentComponent,
    DetailComponentComponent,
    TodoComponentComponent,
    ImagePathPipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
