#include <iostream>
using namespace std;

int main(){
   int i = 1; 
//    while (i < 8)
//    {
//     cout<< i<<endl;
//     i++;
//    }
    
// do
// {
//     cout<<i<<endl;
//     i++;
// } while (i > 8);

for (int i = 0; i <11 ; i++)
{
    if (i < 10 )
    {
        string cat = "0" << string(i);
    }
    
    cout<<6 << " x " << i << " = " << i * 6 <<endl; 

    }




    
    return 0;
}
