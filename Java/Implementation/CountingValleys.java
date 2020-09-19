import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class CountingValleys {
    public static int countingValleys(int steps, String path) {
        char[] pathArray = path.toCharArray();
        char startedWith = 'X';
        int pathDirection = 0;
        int totalValleys = 0;
        for(char p: pathArray){
            if(pathDirection == 0){
                startedWith = p;
            }
            if(p == 'D')
                pathDirection-=1;
            if(p == 'U')
                pathDirection+=1;
            if(pathDirection == 0 && startedWith == 'D'){
                totalValleys++;
            }
        }
        return totalValleys;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int steps = Integer.parseInt(bufferedReader.readLine().trim());

        String path = bufferedReader.readLine();

        int result = Result.countingValleys(steps, path);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
