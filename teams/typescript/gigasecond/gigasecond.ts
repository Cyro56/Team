export class Gigasecond {
  private readonly giga_Date: number;
  public constructor(initial_date: Date){
    this.giga_Date = initial_date.getTime();    
  }  
  public date(): Date{
    let data_Nova = new Date(this.giga_Date + 1e12);    
    return data_Nova;   
  }
};
