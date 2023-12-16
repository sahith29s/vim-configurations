#include <iostream>
#include <map>
#include <string>

using namespace std;

// Map is an associative array
int main()
{
    map<string, int> marks;
    marks["sahith"] = 100;
    cout<< marks["sahith"] <<endl;
}