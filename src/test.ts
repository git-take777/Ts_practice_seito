export const test = () => {
  // const name: string = "Mike"; //string
  // const age: number = 25; //number
  // const isStudent: boolean = false; //bool
  // const hobbies: string[] = ["Reading", "Coding", "Gaming"]; //array
  // const address: Object = {
  //   street: "123 Main ST",
  //   city: "Los",
  //   state: "CA",
  // }; //object
  // const today: Date = new Date(); //date
  // const none: null = null; //null
  // const notDefined: undefined = undefined;
  // const random: any = "Hello World"; //any
  // const gender: "male" | "female" = "male"; //union
  // const value: string | number | null = "Hello World"; //union
  // // 問題:引数に「文字列型の配列」を受け取り、その中身を逆にして生えす関数を作成する
  // // EX. reverseArray(['a', 'b', 'c']) => ['c', 'b','a'];
  // const arr: string[] = ["a", "b", "c"];
  // // オプション引数
  // const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
  //   const reverseArray: string[] = [];
  //   let index: number = arr.length - 1;
  //   while (index >= 0) {
  //     reverseArray.push(arr[index]);
  //     index--;
  //   }
  //   if (hasTom) {
  //     reverseArray.push("Tom");
  //   }
  //   return reverseArray;
  //   // return arr.reverse();
  // };
  // console.log(reverseArray(["a", "b", "c"], true));
  // interface UserProps {
  //   userId: number;
  //   name: string;
  //   age: number;
  //   email: string;
  //   isActive: boolean;
  // }
  // interface AdimUser extends UserProps {
  //   role: string; //admin //leader, manager
  // }
  // const createAccount = (accountInfo: AdimUser) => {
  //   //
  // };
  // createAccount({
  //   userId: 1,
  //   name: "Mike",
  //   age: 24,
  //   email: "email@example.com",
  //   isActive: true,
  //   role: "admin",
  // });
  // // typeもある。基本的にinterfaseとTyepはどちらも変わらない。強いて言えば、型が使えるか否かが変わってくる
  // type UserProps = {
  //   userId: number;
  //   name: string;
  //   age: number;
  //   email: string;
  //   isActive: boolean;
  // };
  // type AdimUser = UserProps & {
  //   role: string; //admin, leader, manager
  // };
  // class User {
  //   userId: number;
  //   name: string;
  //   age: number;
  //   email: string;
  //   isActive: boolean;
  //   constructor(
  //     userId: number,
  //     name: string,
  //     age: number,
  //     email: string,
  //     isActive: boolean
  //   ) {
  //     this.userId = userId;
  //     this.name = name;
  //     this.age = age;
  //     this.email = email;
  //     this.isActive = isActive;
  //   }
  //   getProfile(): string {
  //     return `Name: ${this.name}, Age: ${this.age}`;
  //   }
  //   user = new User(1, "Mile", 24, "mile@example.com", true);
  //   // public, private, protected
  // }

  // 呼び出し先では、「」。
  const foo = (arg: string)
};
