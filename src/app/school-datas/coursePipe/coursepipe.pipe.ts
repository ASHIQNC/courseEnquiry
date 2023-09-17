import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coursepipe',
})
export class CoursepipePipe implements PipeTransform {
  //1st: argument:eath array aanu transform cheeyandath.nammukk name  array aanu transform cheyne
  //2nd:search keyword:nammmal input fieldil type cheyuuunnanth
  //3rd: eath name vechitaaan search aaakunnne.aa array akath eath property vechittan search cheyunnnath

  transform(courseArray: any[], searchString: string, propName: string): any {
    // search chytha result store cheyyan oru variable
    const result: any = [];

    //first we need to check whether the variables that we given are empty or not
    if (!courseArray || !searchString || !propName) {
      //if the field is empty return all array
      return courseArray;
    } else {
      //forEach will give us oro elemnt aayitt therum
      courseArray.forEach((item: any) => {
        //item akath nammale databasil propertyname indo nookan
        //trim:used to remove white spaces in a string
        //includes aaa string akath substring undo nokan includes use aaakunnn
        //lowercaseilott maatan
        if (
          item[propName]
            .trim()
            .toLowerCase()
            .includes(searchString.trim().toLowerCase())
        ) {
          result.push(item);
        }
      });
      return result;
    }
  }
}
