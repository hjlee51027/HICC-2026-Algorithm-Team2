#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

bool isVowel(char c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main() {
    int L; int C;
    cin >> L >> C;

    char chars[15];
    for (int i = 0; i < C; i++) {
        cin >> chars[i];
    }

    sort(chars, chars + C);

    int mask[15];
    for (int i = 0; i < C; i++) {
        if (i < L) {
            mask[i] = 0; // 뽑을 개수(L)만큼 0으로 채움
        } else {
            mask[i] = 1; // 나머지는 1로 채움
        }
    }

    do {
        string password = "";
        int vowel = 0;
        int consonant = 0;

        for (int i = 0; i < C; i++) {
            if (mask[i] == 0) {
                password += chars[i];
                
                if (isVowel(chars[i])) {
                    vowel++;
                } else {
                    consonant++;
                }
            }
        }

        if (vowel >= 1 && consonant >= 2) {
            cout << password << endl;
        }

    } while (next_permutation(mask, mask + C));

    return 0;
}