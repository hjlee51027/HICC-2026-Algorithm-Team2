ab = list(map(int, input().split()));
a = ab[0];
b = ab[1];
count = 1

while b > a:
    # 끝자리가 1
    if (b % 10 == 1):
        b //= 10
        count += 1
    # 짝수
    elif b % 2 == 0:
        b //= 2
        count += 1
    else:
        break

if b == a:
    print(count)
else:
    print(-1)