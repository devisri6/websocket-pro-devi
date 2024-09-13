import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inotify } from '../new-page/new-page.component';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  unreadNotifications:Inotify[]=[]
  show_pop_up=false
  // notifications:Inotify[]=[]

  constructor(private router:Router,private notify:NotificationService){}

  ngOnInit() {
    // this.notify.currentNotifications.subscribe(notifications=>{
    //   this.notifications=notifications
    //   console.log(this.notifications)
    // })

    this.notify.sendNotifications(this.notifications)
    this.loadUnreadNotifications();
  }

  // notifications:Inotify[]=[]

  notifications:Inotify[]=[
    {
      id: 1,
      datetime: new Date('2024-09-01T08:30:00'),
      msg: 'Your application update is complete.',
      status: 'completed',
      isread:false
    },
    {
      id: 2,
      datetime: new Date('2024-09-02T14:45:00'),
      msg: 'You have a new message from support.',
      status: 'unread',
      isread:false
    },
    {
      id: 3,
      datetime: new Date('2024-09-03T18:00:00'),
      msg: 'Scheduled maintenance will occur tonight.',
      status: 'pending',
      isread:true
    },
    {
      id: 4,
      datetime: new Date('2024-09-04T09:15:00'),
      msg: 'New features are now available in the app.',
      status: 'completed',
      isread:false
    },
    {
      id: 5,
      datetime: new Date('2024-09-05T12:30:00'),
      msg: 'Your subscription has been renewed.',
      status: 'completed',
      isread:false
    }
  ]

  onClick()
  {
    this.show_pop_up=!this.show_pop_up;
  }

  showPage()
  {
    this.router.navigate(['/newPage']);

  }

  public loadUnreadNotifications()
  {
    this.unreadNotifications=this.notifications.filter(notification=>notification.isread==false).slice(0,5);
    console.log(this.unreadNotifications);
    
  }
  
}
