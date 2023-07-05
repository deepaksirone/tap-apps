var hour = Meta.currentUserTime.hour()

if(hour != 0 && hour != 6 && hour != 12
&& hour != 18){
  Inoreader.markFolderAsRead.skip()
}
