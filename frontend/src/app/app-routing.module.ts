import { NgModule, SimpleChange } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { SignupComponent } from './components/signup/signup.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarangComponent } from './components/barang/barang.component';
import { TambahBarangComponent } from './components/tambah-barang/tambah-barang.component';
import { EditBarangComponent } from './components/edit-barang/edit-barang.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { UserComponent } from './components/user/user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService],
  },

  {
    path: 'signup/pembeli',
    component: SignupComponent,
    canActivate: [AfterLoginService],
  },

  {
    path: 'signup/staf',
    component: SignupComponent,
    canActivate: [AfterLoginService],
  },

  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService],
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService],
  },

  {
    path: 'dashboard',
    component: BarangComponent,
    canActivate: [AfterLoginService],
  },

  {
    path: 'add',
    component: TambahBarangComponent,
    canActivate: [AfterLoginService],
  },

  {
    path: 'edit/:barangId',
    component: EditBarangComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: 'edit/pembeli/:pembeliId',
    component: EditUserComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: 'edit/staff/:staffId',
    component: EditStaffComponent,
    canActivate: [AfterLoginService],
  },

  {
    path: 'upload',
    component: UploadImageComponent,
    canActivate: [AfterLoginService],
  },

  {
    path: 'user',
    component: UserComponent,
    canActivate: [AfterLoginService],
  },
  {
    path: 'staf',
    component: StaffComponent,
    canActivate: [AfterLoginService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
