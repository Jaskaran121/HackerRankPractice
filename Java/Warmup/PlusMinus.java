import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class PlusMinus {

    // Input -4 3 -9 0 4 1
    // Output 0.500000
    // 0.333333
    // 0.166667
    static void plusMinus(int[] arr) {
        int[] result = new int[3];
        for(int num: arr){
            if(num<0)
            result[1] = result[1] + 1;
            else if(num == 0)
                result[2] = result[2] + 1;
            else
                result[0] = result[0] + 1; 
        }
        for(int r : result){
            System.out.format("%.6f", (float) r/arr.length);
            System.out.println("");
        }
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] arr = new int[n];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        plusMinus(arr);

        scanner.close();
    }
}
