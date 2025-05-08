import { Routes } from '@angular/router';

import { ProductTableComponent } from './components/product-table/product-table.component';
/*import { Head } from 'rxjs';*/

/*import { RegisterFormComponent } from './components/register-form/register-form.component';*/
import { ProductComponent } from './pages/product/product.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { DetailComponent } from './pages/detail/detail.component';


export const routes: Routes = [
    {
        path: '', component: ProductTableComponent
    },
    {
        path: 'agregar' , component: RegisterPageComponent
    },
    {
        path: 'detail', component: DetailComponent
    },
    {
        path: 'product', component: ProductComponent
    }
];

