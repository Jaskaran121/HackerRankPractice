import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class MiniMaxSum {

    // Input 1 2 3 4 5
    // Output 10 14
    static void miniMaxSum(int[] arr) {
        Arrays.sort(arr);
        long sum = 0;
        for(int index = 1;index<arr.length-1;index++){
            sum+=arr[index];
        }
        long min = sum+arr[0];
        long max = sum+arr[arr.length-1];
        System.out.print(min + " " + max);
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int[] arr = new int[5];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < 5; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        miniMaxSum(arr);

        scanner.close();
    }
}
