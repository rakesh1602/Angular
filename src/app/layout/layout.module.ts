import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArchiveComponent } from './sidenav/archive/archive.component';
import { ComposeComponent } from './sidenav/compose/compose.component';
import { DraftsComponent } from './sidenav/drafts/drafts.component';
import { ImportantComponent } from './sidenav/important/important.component';
import { InboxComponent } from './sidenav/inbox/inbox.component';
import { SentComponent } from './sidenav/sent/sent.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SpamComponent } from './sidenav/spam/spam.component';
import { StarredComponent } from './sidenav/starred/starred.component';
import { TrashComponent } from './sidenav/trash/trash.component';
import { RouterModule } from '@angular/router';

// Angular-Material------>
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SearchComponent } from "./header/search/search.component";
import { SearchPipe } from '../pipe/search.pipe';


@NgModule({
    declarations: [
        HeaderComponent,
        SidenavComponent,
        ArchiveComponent,
        ComposeComponent,
        DraftsComponent,
        ImportantComponent,
        InboxComponent,
        SentComponent,
        SpamComponent,
        StarredComponent,
        TrashComponent,
        SearchComponent,
        SearchPipe

    ],
    
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        // Angular-Material------>
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatTabsModule,
        MatProgressBarModule,
        MatGridListModule,
        MatInputModule,
        MatSnackBarModule
       
    ],
    exports: [
      HeaderComponent,
      SidenavComponent,
      ArchiveComponent,
      ComposeComponent,
      DraftsComponent,
      ImportantComponent,
      InboxComponent,
      SentComponent,
      SpamComponent,
      StarredComponent,
      TrashComponent,
      SearchComponent,
      SearchPipe,
     
      // * MATERIAL IMPORTS
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      MatSidenavModule,
      MatIconModule,
      MatFormFieldModule,
      MatSelectModule,
      MatCardModule,
      MatTabsModule,
      MatProgressBarModule,
      MatGridListModule,
      MatSnackBarModule,
      RouterModule,
  ],
})
export class LayoutModule { }
