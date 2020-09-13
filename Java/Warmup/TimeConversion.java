import java.io.*;
import java.math.*;
import java.text.*;
import java.util.*;
import java.util.regex.*;

public class TimeConversion {
    // Output 19:05:45
    // Input 07:05:45PM
    static String timeConversion(String s) {
        String[] timeArr = s.split(":");
        String timePeriod = timeArr[2].substring(2,4);
        int hours = Integer.parseInt(timeArr[0]);
        if(timePeriod.equalsIgnoreCase("AM")){ 
            if(hours == 12){
                timeArr[0] = "00";
            }
            return timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2].substring(0,2);
        } else {
            if(hours != 12)
                timeArr[0] = hours + 12 + "";
            return  timeArr[0] + ":" + timeArr[1] + ":" + timeArr[2].substring(0,               2);
        }
    }

    private static final Scanner scan = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bw = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String s = scan.nextLine();

        String result = timeConversion(s);

        bw.write(result);
        bw.newLine();

        bw.close();
    }
}