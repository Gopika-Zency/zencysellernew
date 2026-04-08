import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { TermsComponent } from './components/terms/terms.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutComponent } from './components/about/about.component';
import { PrivacySellersComponent } from './components/privacy-sellers/privacy-sellers.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { LocationsComponent } from './components/locations/locations.component';
import { DeliverComponent } from './components/deliver/deliver.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ChatComponent } from './components/chat/chat.component';
import { EmailComponent } from './components/email/email.component';
import { WhyZencyComponent } from './components/why-zency/why-zency.component';
import { DconboardingComponent } from './components/dconboarding/dconboarding.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'spotlight', component: SpotlightComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },  
  { path: 'chat-support', component: ChatComponent },
  { path: 'email-support', component: EmailComponent },
  { path: 'why-zency', component: WhyZencyComponent },
  { path: 'deliver', component: DeliverComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'our-locations', component: LocationsComponent },
  { path: 'd2c', component: DconboardingComponent },
  { path: 'privacy-sellers', component: PrivacySellersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: '**', redirectTo: 'coming-soon'}
];
