import { AboutComponent } from 'src/app/about/about.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ResumeComponent } from 'src/app/resume/resume.component';


export const routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog',component: BlogComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'contact', component: ContactComponent},

];