import numpy as np

def main():
    with open("RP/hello.txt", 'w') as f:
        f.write(f'{np.array([1,2,3] + np.array([1,1,1]))}')

if __name__ == "__main__":
    main()