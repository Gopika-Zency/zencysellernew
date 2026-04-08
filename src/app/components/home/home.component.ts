import { Component } from '@angular/core';
import { BannerComponent } from "../components/banner/banner.component";
import { WhyChooseUsComponent } from "../components/why-choose-us/why-choose-us.component";
import { SellingProcessComponent } from "../components/selling-process/selling-process.component";
import { TestimonialsComponent } from "../components/testimonials/testimonials.component";
import { SellerSupportComponent } from "../components/seller-support/seller-support.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, WhyChooseUsComponent, SellingProcessComponent, TestimonialsComponent, SellerSupportComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
