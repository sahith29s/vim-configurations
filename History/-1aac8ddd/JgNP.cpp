// #include <iostream>
// using namespace std;

// int main()
// {
//     int num1, num2, num3;

//     cout << "Enter number 1: ";
//     cin >> num1;

//     cout << "Enter number 2: ";
//     cin >> num2;

//     cout << "Enter number 3: ";
//     cin >> num3;
//     if (num1 > num2)
//     {
//         if (num1 > num3)
//         {
//             cout << "num1 is greatest among all";
//         }
//         else
//         {
//             cout << "num3 is greatest among all";
//         }
//     }

//     else
//     {
//         if (num2 > num3)
//         {
//             cout << "num2 is greatest among all";
//         }
//         else
//         {
//             cout << "num3 is greatest among all";
//         }
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main(){
//     int number;

//     cout<<"Enter the number: ";
//     cin>>number;

//     if (number % 2 == 0)
//     {
//         cout<<"Yes it is a even";
//     }
//     else{
//         cout<<"No it's an odd";
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     // int i = 0;
//     // while (i < 4)
//     // {
//     //     cout<<i;
//     //     i++;
//     // }
//     cout<<"sahith";

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main(){
//     for (int i = 0; i <100; i++)
//     {
//         if(i%3 == 0){
//             continue;
//         }
//         else{
//             cout<<i<<endl;
//         }
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {

//     int number;
//     cout << "Enter a number: ";
//     cin >> number;

//     string isPrime = "prime";
//     for (int i = 2; i < number / 2; i++)
//     {
//         if (number % i == 0)
//         {
//             isPrime = "not Prime";
//             break;
//         }
//     }
//     cout << isPrime;

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int number1, number2;
//     cout << "Enter Number1: ";
//     cin >> number1;

//     cout << "Enter Number2: ";
//     cin >> number2;

//     for (int i = number1; i < number2; i++)
//     {

//         bool isPrime = true;
//         for (int j = 2; j < i ; j++)
//         {
//             if (i % j == 0)
//             {
//                 isPrime = false;
//                 break;
//             }
//         }

//         // if(isPrime){
//         //     cout<<i<<"Yes prime\n";
//         // }
//         // else{
//         //     cout<<i<<"not prime\n";
//         // }

//         cout<< isPrime ? i

//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     char button;
//     cout<<"Enter the button: ";
//     cin >> button;

//     switch (button)
//     {
//     case 'a':
//         cout<<"Enter";

//         break;

//     default:
//         break;
//     }
//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int rows, column;
//     cout<<"Enter the rows: ";
//     cin>>rows;

//     cout<<"Enter the column: ";
//     cin>>column;

//     for (int i = 0; i < rows; i++)
//     {
//         for (int j = 0; j < column; j++)
//         {
//             cout<<"* ";
//         }
//         cout<< endl;

//     }

//     return 0;

// }
// #include <iostream>
// using namespace std;

// int main()
// {
//     int rows, column;
//     cout<<"Enter the rows: ";
//     cin>>rows;

//     cout<<"Enter the column: ";
//     cin>>column;

//     for (int i = 1; i <= rows; i++){
//         for (int j = 1; j <= column; j++)
//         {
//             if (i == 1 || i == rows)
//             {
//                 cout<<"* " ;

//             }
//             else{
//                 if(j == 1 || j==column){
//                     cout<<"* ";
//                 }
//                 else{
//                     cout<<"  ";
//                 }
//             }

//         }
//         cout<<endl;

//     }

//     return 0;

// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int rows;
//     cout << "Enter the number of rows / columns";
//     cin >> rows;

//     for (int i = 1; i <= rows; i++)
//     {
//         for (int j = 1; j <= rows; j++)
//         {

//             if (rows - j - i + 1 > 0)
//             {
//                 cout << " ";
//             }
//             else
//             {
//                 cout << "* ";
//             }
//         }
//         cout << endl;
//     }
//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {

//     int rows;
//     int number = 1;
//     cout << "Enter the number of rows / columns";
//     cin >> rows;

//     for (int i = 1; i <= rows; i++)
//     {
//         for (int j = 1; j <= i; j++)
//         {

//             cout << number << " ";
//             number++;
//         }
//         cout << endl;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {

//     int rows, column;
//     cout << "Enter the rows: ";
//     cin >> rows;

//     for (int i = 1; i <= 2 * rows; i++)
//     {
//         for (int j = 1; j <= 2 * rows; j++)
//         {

//         }
//         cout << endl;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int rows, column;
//     cout << "Enter the rows: ";
//     cin >> rows;

//     for (int i = 1; i <= rows; i++)
//     {
//         int number = 1;
//         for (int j = 1; j <= rows - i + 1; j++)
//         {
//             cout<<number;
//             number++;
//         }
//         cout << endl;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int rows, column , number = 1;

//     cout << "Enter the rows: ";
//     cin >> rows;

//     for (int i = 1; i <= rows; i++)
//     {

//         for (int j = 1; j <= i; j++)
//         {
//             cout<<number;
//             number = !number;
//         }
//         cout<<endl;

//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int rows, column;
//     cout << "Enter the rows: ";
//     cin >> rows;

//     for (int i = 1; i <= rows; i++)
//     {
//         for (int j = 1; j <= 2*rows -1; j++)
//         {

//         }

//     }

//     return 0;
// }

// #include <iostream>
// #include<cmath>
// using namespace std;

// int main()
// {

//     int number;
//     cout << "Enter a number: ";
//     bool isPrime = true;
//     cin >> number;

//     for (int i = 2; i < sqrt(number); i++)
//     {
//         if (!(number % i))
//         {
//             isPrime = false;
//             break;
//         }
//     }

//     // if(isPrime){
//     //     cout<<"yes it is";
//     // }
//     // else{
//     //     cout<<"Not it is";
//     // }

//     cout << (isPrime ? "Yes is a prime" : "No it is not a prime") <<endl;

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main(){
//     printf("sahith");
//     return 0;
// }
// #include <iostream>
// using namespace std;

// int main()
// {

//     int n, reversed_number = 0, remainder;

//     cout << "Enter an integer: ";
//     cin >> n;

//     while (n != 0)
//     {
//         remainder = n % 10;
//         reversed_number += (remainder* remainder * remainder);
//         n /= 10;
//     }

//     cout << "Reversed Number = " << reversed_number;

//     return 0;
// }

// int add(int num1 , int num2){
//     int sum = num1 + num2;
//     return sum;
// }

// #include <iostream>
// using namespace std;

// int main(){

//     cout<<add(8, 8)<<endl;
//     return 0;
// }

// int primeNumebersBetweee(int num1, int num2)
// {
//     bool isPrime = true;

//     for (int i = num1; i < num2; i++)
//     {
//         for (int j = 2; j < i / 2; j++)
//         {
//             if (i % j == 0)
//             {
//                 isPrime = false;
//                 break;
//             }
//         }

//         //     if (isPrime)
//         //     {
//         //        int a = 1;
//         //     }

//         //     else
//         //     {
//         //         cout<< i << " is not a prime ";
//         //     }
//         // }
//         // return 0;
//         return i;
//     }
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     primeNumebersBetweee(2, 8)

//         return 0;
// }

// int prime(int num1, int num2)
// {
//     bool isPrime = true;
//     for (int i = num1; i < num2; i++)
//     {
//         for (int j = 2; j < i / 2; j++)
//         {

//             if (i % i == 0)
//             {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime)
//         {
//             return i;
//         }
//     }
//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main(){
//     cout<<prime(6, 8);
//     return 0;
// }

// bool primesBetween(int num1)
// {
//     bool isPrime = true;

//     for (int i = 2; i < num1 / 2; i++)

//     {
//         if (num1 % i == 0)
//         {
//             isPrime = false;
//         }
//     }
//     return isPrime;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int num1, num2;
//     cout << "Enter number 1: " ;
//     cin >> num1;

//     cout << "Enter number 2: " ;
//     cin >> num2;

//     for (int i = num1; i < num2; i++)
//     {
//         if (primesBetween(i))
//         {
//             cout<<i<<endl;
//         }

//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int num1 = 0, num2 = 1, nthNumber, a = 1, sum = 0;
//     cout << "Enter the nth number: ";
//     cin >> nthNumber;

//     while (a < nthNumber)
//     {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;

//         a++;
//         if (a == nthNumber  )
//         {
//             cout<<sum<<endl;
//         }

//         // cout<<sum<<endl;
//     }

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main(){
//     cout<<factorial(5)<<endl;
//     return 0;
// }

// int factorial(int num1)
// {
//     int fact = 1;
//     for (int i = 1; i <= num1; i++)
//     {
//         fact *= i;
//     }
//     return fact;
// }

// int ncr(int num1N, int num2R)
// {

//     int num1NFactorial = factorial(num1N);
//     int num2NFactorial = factorial(num2R);
//     int nMinusR = num1N - num2R;
//     int nMinusRFactorial = factorial(nMinusR);
//     int result = num1NFactorial / (num2NFactorial * nMinusRFactorial);
//     return result;
// }

// #include <iostream>
// using namespace std;

// int main(){

//     cout<<ncr(5, 2)<<endl ;
//     return 0;
// }

// int binarySearch(int array[], int findNumber)
// {
//     int initial = 0;
//     int end = 10;
//     for (int i = 0; i < findNumber; i++)
//     {
//         int mid = (initial + end)/2;
//         if (array[mid] == findNumber)
//         {
//             return mid;
//         }

//         else if(array[mid] > findNumber){
//             end = mid-1;
//         }

//         else{
//             initial = mid+1;
//         }
//     }
//     return 0 ;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
//     int array[11] = {1, 2, 4, 8, 12, 13, 14, 18, 30, 100, 901};
//     cout<<binarySearch(array , 12)<<endl;
//     return 0;
// }

#include <iostream>
using namespace std;

int main()
{

    int chocolates = 0, money = 15, wrappers, leftWrappers, newChocolates, wrappersPlusNewChocolates;

    chocolates = money;
    money = 0;
    wrappers = chocolates;

    wrappersPlusNewChocolates = wrappers;

    while (wrappersPlusNewChocolates > 3)
    {
        newChocolates = wrappers / 3;
        leftWrappers = wrappers % 3;
        chocolates += wrappers / 3;
        wrappers = leftWrappers + newChocolates;
        wrappersPlusNewChocolates = wrappers + newChocolates;
    }

    cout << chocolates << endl;
    cout << chocolates << endl;

    return 0;
}