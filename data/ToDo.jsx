class ToDo {
  constructor(title, startDate, dueDate) {
    this.title = title;
    
    //parses dates
    this.startDate = new Date(startDate);
    this.dueDate = new Date(dueDate);
  }

  startDateToUTCTimeString() {
    this.startDate.toUTCString();
  }

  dueDateToUTCTimeString() {
    this.dueDate.toUTCString();
  }
}
