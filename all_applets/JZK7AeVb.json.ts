var hour = Meta.currentUserTime.hour()

if(hour != 0 && hour != 3 && hour != 6 && hour != 9 &&
hour != 12 && hour != 15 && hour != 18 && hour != 21){
  Inoreader.markFolderAsRead.skip()
}