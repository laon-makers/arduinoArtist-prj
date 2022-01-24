let refRt = ["1-38-35", "39-51-23.34", "52-100-35"];
let dateTimeLog = [
    [1,  "2022.01.23", "15:50", "19:30", "3:40",  -1,     0,  6.28,   2, "Design of the next project (rotating wheel)."],
    [1,  "2021.12.24", "19:37", "22:37", "3:00",  -1,     0,  8.28,   0, "Free (meeting); motor and accessory for next project."],
    [1,  "2021.12.22", "11:02", "14:26", "4:24",  -1,     0,  8.28,   0, "Free (meeting); about '종강' and next projects."],
    [1,  "2021.12.09", "09:05", "12:05", "3:00",  -1,     0,  12.42,   0, "Free (standby for demo); the end of 'Interactive LED'."],
    [1,  "2021.12.08", "16:30", "09:05", "16:35", 85,   100,  12.42,  12, "1 hour 25 minutes carried. Excluded 6 hours as promised."],
    [1,  "2021.12.07", "17:00", "01:45", "8:45",  15,     0, -18.42,   9, "15 minutes carried from previous spare 2 hours."],
    [1,  "2021.12.04", "13:15", "03:15", "14:00",  0,     0,  -9.42,  12, ""],
    [1,  "2021.12.03", "21:00", "24:00", "3:00",   0,     0,   2.57,   3, ""],
    [1,  "2021.12.02", "20:20", "23:10", "2:50",  10,     0,   5.57,   3, "10 minutes carried. Extra work (3.5h) excluded."],
    [1,  "2021.11.29", "18:30", "22:00", "3:30", 150,     0,   8.57,   6, "3 hours carried. Extra 4 hours excluded."],
    [1,  "2021.11.27", "15:40", "24:00", "7:20",   0,     0,  14.57,   6, "Extra work (2.5h) excluded."],
    [1,  "2021.11.26", "18:40", "23:00", "4:20",   0,     0,  20.57,   3, ""],
    [1,  "2021.11.22", "19:00", "22:00", "3:00",   0,     0,  23.57,   3, "Extra work (5h) excluded."],
    [1,  "2021.11.20", "15:20", "22:30", "6:00",   0,   100,  26.57,   6, "In the LAB. Extra 2 hours excluded."],
    [1,  "2021.11.19", "17:20", "20:30", "3:10",   0,     0, -10.28,   3, ""],
    [1,  "2021.11.18", "17:00", "20:20", "3:20",   0,     0,  -7.28,   3, "Special rate for 'Interactive LED' project."],
    [1,  "2021.11.06", "14:00", "16:00", "2:00",  -1,     0,  -2.85,   2, "By Req."],
    [1,  "2021.10.24", "14:00", "21:00", "7:00",  -1,     0,  -0.85,   2, ""],
    [1,  "2021.10.17", "14:00", "19:05", "5:05",  -1,     0,   1.14,   2, ""],    
    [1,  "2021.10.10", "19:00", "23:13", "4:13",  -1,     0,   3.14,   2, ""],
    [1,  "2021.10.05", "18:02", "19:12", "1:10",  -1,     0,   5.14,   0, "Free (meeting)"],
    [1,  "2021.09.19", "16:00", "23:00", "7:00",  -1,     0,   5.14,   0, "Free (meeting)"],
    [1,  "2021.07.26", "16:15", "19:10", "2:50",  -1,    60,   5.14,   2, ""],
    [1,  "2021.07.18", "14:05", "18:25", "4:20",  -1,     0,    -10,   2, ""],
    [1,  "2021.07.11", "19:00", "21:25", "2:25",  -1,     0,     -8,   2, ""],
    [1,  "2021.07.06", "19:55", "23:15", "3:20",  -1,     0,     -6,   2, ""],
    [1,  "2021.05.30", "17:00", "19:50", "2:50",  -1,     0,     -4,   2, ""],
    [1,  "2021.05.16", "14:00", "16:12", "2:12",  -1,     0,     -2,   2, ""],
    [1,  "2021.05.05", "19:20", "21:30", "2:10",  -1,     0,      0,   0, "Free (보충)"],
    [1,  "2021.05.03", "19:00", "23:00", "4:00",  -1,    31,      0,   2, ""],
    [1,  "2021.03.28", "14:00", "17:20", "3:20",  -1,     0,  -6.85,   2, ""],
    [1,  "2021.03.13", "14:10", "17:30", "3:20",  -1,     0,  -4.85,   2, ""],
    [1,  "2021.02.28", "14:05", "17:02", "2:57",  -1,     0,  -2.85,   2, ""],    
    [1,  "2021.02.07", "14:05", "16:25", "2:00",  -1,     0,  -0.85,   2, ""],    
    [1,  "2021.01.24", "14:05", "16:11", "2:00",  -1,     0,   1.14,   2, ""],
    [1,  "2021.01.10", "14:00", "17:00", "3:00",  -1,     0,   3.14,   2, ""],
    [1,  "2021.01.03", "14:10", "18:00", "3:50",  -1,     0,   5.14,   2, ""],
    [1,  "2020.12.27", "15:00", "20:00", "5:00",  -1,    80,   7.14,   2, ""],  
    [1,  "2020.12.20", "14:00", "19:00", "5:00",  -1,     0, -13.71,   2, ""],
    [1,  "2020.12.13", "14:30", "17:20", "2:50",  -1,     0, -11.71,   2, ""],
    [1,  "2020.12.06", "14:30", "17:30", "3:00",  -1,     0,  -9.71,   2, ""],
    [1,  "2020.11.29", "14:05", "16:50", "2:50",  -1,     0,  -7.71,   2, ""],
    [1,  "2020.11.23", "20:25", "22:00", "1:35",  -1,     0,  -5.71,   0, "Free (보충)"],
    [1,  "2020.11.22", "14:00", "19:00", "5:00",  -1,     0,  -5.71,   2, ""],
    [1,  "2020.11.18", "21:30", "00:30", "3:00",  -1,     0,  -3.71,   0, "Free (보충)"],
    [1,  "2020.11.15", "14:00", "16:05", "2:05",  -1,     0,  -3.71,   2, ""],
    [1,  "2020.11.07", "21:00", "01:45", "4:45",  -1,     0,  -1.71,   2, ""],
    [1,  "2020.10.31", "14:00", "17:00", "3:00",  -1,     0,   0.28,   2, ""],
    [1,  "2020.10.25", "14:00", "18:00", "4:00",  -1,     0,   2.28,   2, ""],
    [1,  "2020.10.17", "14:00", "17:00", "3:00",  -1,    30,   4.28,   2, ""],
    [1,  "2020.10.11", "14:05", "16:50", "2:45",  -1,     0,  -2.28,   2, ""],
    [1,  "2020.10.04", "14:00", "17:35", "3:35",  -1,     0,  -0.29,   2, ""],
    [1,  "2020.09.26", "14:00", "16:30", "2:30",  -1,    13,   1.71,   2, ""],
    [1,  "2020.09.19", "14:00", "17:40", "3:40",  -1,     7,      0,   2, "First Day"]
];
