import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSpinnerComponent } from './dialog-spinner/dialog-spinner.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { TablaDistritoComponent } from './tabla-distrito/tabla-distrito.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    DialogSpinnerComponent,
    TablaDistritoComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatSortModule
  ],
  exports:[
    DialogSpinnerComponent,
    TablaDistritoComponent,
    
  ]
})
export class ComponentesModule { }
