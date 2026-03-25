#include <iostream>
using namespace std;

bool hansu(int x) {
    if (x < 100) return true;

    else if (x < 1000) {
        int hu = x / 100;
        int te = (x % 100) / 10;
        int on = x % 10;

        if ((hu - te) == (te - on)) return true;
        else return false;
    }

    else return false;
}

int main() {
    int N;
    cin >> N;

    int count = 0;

    for (int i = 1; i <= N; i++) {
        if (hansu(i)) {
            count++;
        }
    }

    cout << count;

    return 0;
}