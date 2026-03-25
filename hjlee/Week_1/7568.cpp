#include <iostream>
using namespace std;

int main() {
    int N;
    cin >> N;

    int weight[50];
    int height[50];
    int rank[50];

    for (int i = 0; i < N; i++) {
        cin >> weight[i] >> height[i];
    }

    for (int i = 0; i < N; i++) {
        rank[i] = 1;

        for (int j = 0; j < N; j++) {

            if (weight[j] > weight[i] && height[j] > height[i]) {
                rank[i]++;
            }
        }
    }

    for (int i = 0; i < N; i++) {
        cout << rank[i] << " ";
    }

    return 0;
}
/* 처음에 생각했던 방식
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Person {
    int weight;
    int height;
    int rank;
};

int main() {
    int N;
    cin >> N;

    vector<Person> v;

    for (int i = 0; i < N; i++) {
        int x, y;
        cin >> x >> y;

        Person cur = {x, y, 1};

        for (int j = 0; j < v.size(); j++) {
            if (v[j].weight > cur.weight && v[j].height > cur.height) {
                cur.rank++;
            }
            else if (v[j].weight < cur.weight && v[j].height < cur.height) {
                v[j].rank++;
            }
        }

        v.push_back(cur);
    }

    for (int i = 0; i < N; i++) {
        cout << v[i].rank << " ";
    }

    return 0;
}
*/