import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/taks.services';

bootstrapApplication(AppComponent
//, {
//     providers: [TasksService]
// }
).catch((err) => console.error(err));
