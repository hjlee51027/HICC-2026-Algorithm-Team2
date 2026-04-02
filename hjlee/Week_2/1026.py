n = int(input());
a_list = list(map(int, input().split()));
b_list = list(map(int, input().split()));

a_list.sort();
b_list.sort(reverse=True);

s = 0
for i in range(n):
    s += a_list[i] * b_list[i];

print(s);