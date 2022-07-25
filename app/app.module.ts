import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailFormComponent } from './payment-details/payment-detail-form/payment-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBookingComponent } from './Booking/create-booking/create-booking.component';
import { DetailViewBookingComponent } from './Booking/detail-view-booking/detail-view-booking.component';
import { ListViewBookingComponent } from './Booking/list-view-booking/list-view-booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminDetailsComponent } from './movie/admin-details/admin-details.component';
import { AllMoviesComponent } from './movie/all-movies/all-movies.component';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component';
import { DetailViewMovieComponent } from './movie/detail-view-movie/detail-view-movie.component';
import { MovieDashboardComponent } from './movie/movie-dashboard/movie-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateShowComponent } from './show/create-show/create-show.component';
import { DetailViewShowComponent } from './show/detail-view-show/detail-view-show.component';
import { ListViewShowComponent } from './show/list-view-show/list-view-show.component';
import { UpdateShowComponent } from './show/update-show/update-show.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateMoviesComponent } from './movie/update-movies/update-movies.component';
import { BookingComponent } from './Booking/booking.component';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';
import { SearchMoviePipe } from './movie/search-movie.pipe';
import { ShowComponent } from './show/show.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './customer/create-customer/create-customer.component';
import { DetailViewCustomerComponent } from './customer/detail-view-customer/detail-view-customer.component';
import { ListViewCustomerComponent } from './customer/list-view-customer/list-view-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { ScreenComponent } from './screen/screen.component';
import { CreateScreenComponent } from './screen/create-screen/create-screen.component';
import { ListViewScreenComponent } from './screen/list-view-screen/list-view-screen.component';
import { DetailViewScreenComponent } from './screen/detail-view-screen/detail-view-screen.component';
import { UpdateScreensComponent } from './screen/update-screens/update-screens.component';
import { SeatComponent } from './seat/seat.component';
import { CreateSeatComponent } from './seat/create-seat/create-seat.component';
import { ListViewSeatComponent } from './seat/list-view-seat/list-view-seat.component';
import { TheatreComponent } from './theatre/theatre.component';
import { CreateTheatreComponent } from './theatre/create-theatre/create-theatre.component';
import { DetailViewTheatreComponent } from './theatre/detail-view-theatre/detail-view-theatre.component';
import { ListViewTheatreComponent } from './theatre/list-view-theatre/list-view-theatre.component';
import { TheatresBookingComponent } from './theatre/theatres-booking/theatres-booking.component';
import { UpdateTheatreComponent } from './theatre/update-theatre/update-theatre.component';
import { TicketComponent } from './ticket/ticket.component';
import { CreateTicketComponent } from './ticket/create-ticket/create-ticket.component';
import { UsrService } from './user/usr.service';



@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailFormComponent,
    CreateBookingComponent,
    DetailViewBookingComponent,
    ListViewBookingComponent,
    HomeComponent,
    LoginComponent,
    AdminDetailsComponent,
    AllMoviesComponent,
    CreateMovieComponent,
    DetailViewMovieComponent,
    MovieDashboardComponent,
    NavbarComponent,
    CreateShowComponent,
    DetailViewShowComponent,
    ListViewShowComponent,
    UpdateShowComponent,
    CreateUserComponent,
    UpdateMoviesComponent,
    BookingComponent,
    UserComponent,
    MovieComponent,
    SearchMoviePipe,
    ShowComponent,
    CustomerComponent,
    CreateCustomerComponent,
    DetailViewCustomerComponent,
    ListViewCustomerComponent,
    UpdateCustomerComponent,
    ScreenComponent,
    CreateScreenComponent,
    ListViewScreenComponent,
    DetailViewScreenComponent,
    UpdateScreensComponent,
    SeatComponent,
    CreateSeatComponent,
    ListViewSeatComponent,
    TheatreComponent,
    CreateTheatreComponent,
    DetailViewTheatreComponent,
    ListViewTheatreComponent,
    TheatresBookingComponent,
    UpdateTheatreComponent,
    TicketComponent,
    CreateTicketComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
