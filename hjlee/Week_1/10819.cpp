#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int N;
    cin >> N;

    int A[8];
    for (int i = 0; i < N; i++) {
        cin >> A[i];
    }

    sort(A, A + N);

    int result = 0;

    if (N % 2 == 0) { // 짝수
        int k = (N / 2) - 1;

        for (int i = 0; i < k; i++) {
            result -= 2 * A[i];
        }
        for (int i = 0; i < k; i++) {
            result += 2 * A[N - 1 - i];
        }
        
        result -= A[k];
        result += A[k + 1];
    } 
    else {
        // 홀수일 때는 두 가지 경우를 계산해서 더 큰 값을 찾아야 함.
        int mid = N / 2;

        // [경우 1] -1 계수가 2개인 경우 (가운데 값들을 -1로 처리) 작 - 큰 - 작 - 큰 - 작 같은 경우
        int sum1 = 0;
        for (int i = 0; i < mid - 1; i++) sum1 -= 2 * A[i];       // 가장 작은 값들
        for (int i = N - mid; i < N; i++) sum1 += 2 * A[i];       // 가장 큰 값들
        sum1 -= A[mid - 1];                                       // 경계값 1
        sum1 -= A[mid];                                           // 경계값 2

        // [경우 2] +1 계수가 2개인 경우 (가운데 값들을 +1로 처리) 큰 - 작 - 큰 - 작 - 큰 같은 경우
        int sum2 = 0;
        for (int i = 0; i < mid; i++) sum2 -= 2 * A[i];           // 가장 작은 값들
        for (int i = N - mid + 1; i < N; i++) sum2 += 2 * A[i];   // 가장 큰 값들
        sum2 += A[mid];                                           // 경계값 1
        sum2 += A[mid + 1];                                       // 경계값 2

        // 두 경우 중 더 큰 값이 정답
        result = max(sum1, sum2);
    }

    cout << result;

    return 0;
}