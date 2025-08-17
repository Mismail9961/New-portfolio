Code:

#include <iostream>
#include <sstream>  
using namespace std;

int main(int argc, char* argv[])
{
    if (argc != 4) {
        cout << "Use this format: " << argv[0] << " number operator number" << endl;
        return 0;
    }

    double num1, num2;
    stringstream s1(argv[1]), s2(argv[3]);
    s1 >> num1;
    s2 >> num2;

    char op = argv[2][0];
    double result = 0;

    if (op == '+')
        result = num1 + num2;
    else if (op == '-')
        result = num1 - num2;
    else if (op == '*')
        result = num1 * num2;
    else if (op == '/')
    {
        if (num2 == 0) {
            cout << "Error: divide by zero!" << endl;
            return 0;
        }
        result = num1 / num2;
    }
    else {
        cout << "Error: operator must be + - * /" << endl;
        return 0;
    }

    
    if (result == (int)result)
        cout << (int)result << endl;
    else
        cout << result << endl;

    return 0;
}
