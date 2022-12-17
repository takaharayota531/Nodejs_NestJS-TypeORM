import { Injectable } from '@nestjs/common';

const data=[
  {name:'taro',mail:'taro@yamada',age:39},
  {name:'shinji',mail:'shinji@yamada',age:139},
  {name:'darui',mail:'darui@shingeki',age:49}
]

@Injectable()
export class AppService {
  getHello(id:number): object{
    const n=id<0?0:id>=data.length?data.length-1:id;
    return{
      id:n,
      data:data[n],
      created:new Date()
    };
  }
}
