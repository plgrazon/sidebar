const restaurantData = [
  { name: 'Death Eater\'s Deadly Prophecy of Revenge' },
  { name: 'The Deadly Dark Mark of Azkaban' },
  { name: 'Dark Wizard\'s Dark Cruciatus Curse of the Dark Arts' },
  { name: 'Tom Riddle\'s Deadly Prophecy that Shall not be Named' },
  { name: 'The Deadly Cruciatus Curse of Revenge' },
  { name: 'Lord Voldemort\'s Deadly Philosopher\'s Stone of the Pure Blood' },
  { name: 'Tom\'s Unforgiveable Dark Mark that Shall not be Named' },
  { name: 'Riddle\'s Unforgiveable Elder Wand of Azkaban' },
  { name: 'Deathly Unforgiveable Elder Wand that Shall not be Named' },
  { name: 'Deathly Deadly Philosopher\'s Stone that Shall not be Named' },
  { name: 'Dementor\'s Dark Killing Curse of the Dark Lord' },
  { name: 'Slytherin Dark Imperius Curse of the Pure Blood' },
  { name: 'Deathly Dark Prophecy of the Dark Lord' },
  { name: 'Dark Wizard\'s Deadly Horcrux of Azkaban' },
  { name: 'Riddle\'s Deathly Killing Curse of the Dark Lord' },
  { name: 'The Unforgiveable Cruciatus Curse of Azkaban' },
  { name: 'Dark Wizard\'s Deathly Horcrux of Revenge' },
  { name: 'The Deathly Dark Mark of the Pure Blood' },
  { name: 'Tom Riddle\'s Dark Horcrux of Azkaban' },
  { name: 'Death Eater\'s Deathly Elder Wand that Shall not be Named' },
  { name: 'Death Eater\'s Unforgiveable Dark Mark of the Pure Blood' },
  { name: 'Dark Wizard\'s Deathly Prophecy of Revenge' },
  { name: 'Slytherin Unforgiveable Prophecy of the Pure Blood' },
  { name: 'Dementor\'s Dark Prophecy of Azkaban' },
  { name: 'Tom Riddle\'s Unforgiveable Prophecy of the Dark Lord' },
  { name: 'Deathly Dark Imperius Curse of the Dark Arts' },
  { name: 'Riddle\'s Deadly Killing Curse of Revenge' },
  { name: 'Deathly Unforgiveable Horcrux of Azkaban' },
  { name: 'Tom\'s Dark Horcrux of the Dark Arts' },
  { name: 'Dark Wizard\'s Deathly Killing Curse of the Dark Arts' },
  { name: 'Deathly Dark Cruciatus Curse of the Pure Blood' },
  { name: 'Tom\'s Unforgiveable Elder Wand of the Pure Blood' },
  { name: 'Dark Wizard\'s Dark Philosopher\'s Stone of the Dark Lord' },
  { name: 'Death Eater\'s Unforgiveable Curse of Revenge' },
  { name: 'Slytherin Unforgiveable Curse of the Dark Arts' },
  { name: 'Tom Riddle\'s Unforgiveable Prophecy of Revenge' },
  { name: 'Lord Voldemort\'s Dark Horcrux of the Pure Blood' },
  { name: 'The Deadly Prophecy of the Dark Lord' },
  { name: 'Dementor\'s Unforgiveable Prophecy of Azkaban' },
  { name: 'Lord Voldemort\'s Unforgiveable Dark Mark that Shall not be Named' },
  { name: 'Dementor\'s Unforgiveable Elder Wand of Revenge' },
  { name: 'Deathly Deadly Cruciatus Curse of the Dark Lord' },
  { name: 'Deathly Dark Imperius Curse of the Dark Lord' },
  { name: 'Tom Riddle\'s Unforgiveable Imperius Curse of Azkaban' },
  { name: 'Dark Wizard\'s Unforgiveable Imperius Curse of Revenge' },
  { name: 'Tom\'s Dark Killing Curse of the Dark Lord' },
  { name: 'Dark Wizard\'s Deathly Cruciatus Curse of Revenge' },
  { name: 'Dementor\'s Dark Philosopher\'s Stone of the Pure Blood' },
  { name: 'Riddle\'s Unforgiveable Imperius Curse of the Dark Lord' },
  { name: 'Lord Voldemort\'s Unforgiveable Philosopher\'s Stone of the Dark Arts' },
  { name: 'Tom\'s Dark Elder Wand of Azkaban' },
  { name: 'Dementor\'s Dark Killing Curse of the Pure Blood' },
  { name: 'The Deadly Curse that Shall not be Named' },
  { name: 'The Unforgiveable Horcrux of the Dark Arts' },
  { name: 'Dementor\'s Unforgiveable Killing Curse that Shall not be Named' },
  { name: 'Death Eater\'s Deadly Cruciatus Curse of Revenge' },
  { name: 'Lord Voldemort\'s Deathly Imperius Curse of the Dark Lord' },
  { name: 'Dark Wizard\'s Dark Cruciatus Curse of the Dark Arts' },
  { name: 'Tom\'s Unforgiveable Horcrux of Azkaban' },
  { name: 'Slytherin Dark Elder Wand of Revenge' },
  { name: 'Deathly Deathly Philosopher\'s Stone that Shall not be Named' },
  { name: 'Death Eater\'s Deadly Killing Curse of the Pure Blood' },
  { name: 'Dementor\'s Dark Killing Curse of the Pure Blood' },
  { name: 'Death Eater\'s Deathly Dark Mark of the Dark Arts' },
  { name: 'Dementor\'s Dark Cruciatus Curse of the Dark Lord' },
  { name: 'Deathly Unforgiveable Curse that Shall not be Named' },
  { name: 'Dark Wizard\'s Dark Dark Mark of the Dark Arts' },
  { name: 'Dark Wizard\'s Unforgiveable Elder Wand of the Pure Blood' },
  { name: 'Dementor\'s Deathly Dark Mark of the Dark Lord' },
  { name: 'Riddle\'s Deathly Dark Mark of Revenge' },
  { name: 'Deathly Dark Imperius Curse of the Dark Lord' },
  { name: 'Tom\'s Deathly Imperius Curse of the Dark Arts' },
  { name: 'Dark Wizard\'s Unforgiveable Imperius Curse of the Dark Lord' },
  { name: 'Dementor\'s Deadly Cruciatus Curse of Azkaban' },
  { name: 'Dementor\'s Deathly Philosopher\'s Stone of the Dark Arts' },
  { name: 'Tom Riddle\'s Deadly Philosopher\'s Stone of the Pure Blood' },
  { name: 'Deathly Unforgiveable Dark Mark of the Dark Arts' },
  { name: 'Death Eater\'s Unforgiveable Dark Mark of the Dark Lord' },
  { name: 'Riddle\'s Deathly Killing Curse that Shall not be Named' },
  { name: 'Tom Riddle\'s Deathly Prophecy that Shall not be Named' },
  { name: 'Deathly Deathly Cruciatus Curse that Shall not be Named' },
  { name: 'Tom Riddle\'s Unforgiveable Elder Wand of the Dark Arts' },
  { name: 'Slytherin Deadly Imperius Curse of the Dark Lord' },
  { name: 'Lord Voldemort\'s Dark Prophecy of the Dark Lord' },
  { name: 'Lord Voldemort\'s Deathly Prophecy of Revenge' },
  { name: 'Riddle\'s Dark Prophecy of the Dark Arts' },
  { name: 'Death Eater\'s Dark Cruciatus Curse of Azkaban' },
  { name: 'Lord Voldemort\'s Unforgiveable Cruciatus Curse of the Pure Blood' },
  { name: 'Slytherin Dark Prophecy of the Dark Lord' },
  { name: 'The Deadly Prophecy of the Dark Lord' },
  { name: 'Deathly Deadly Curse of Azkaban' },
  { name: 'Tom Riddle\'s Unforgiveable Horcrux of Revenge' },
  { name: 'Tom Riddle\'s Deathly Imperius Curse of the Dark Lord' },
  { name: 'Death Eater\'s Unforgiveable Horcrux of the Pure Blood' },
  { name: 'Tom Riddle\'s Deadly Philosopher\'s Stone of the Dark Arts' },
  { name: 'Dark Wizard\'s Dark Elder Wand of the Dark Lord' },
  { name: 'Deathly Dark Dark Mark of the Dark Arts' },
  { name: 'Dementor\'s Deathly Killing Curse of the Dark Lord' },
  { name: 'Deathly Unforgiveable Curse of Azkaban' },
  { name: 'Dementor\'s Deathly Curse that Shall not be Named' }
];

const hoursData = [
  {rid: 1, mon: '11:00 am - 10:00 pm', tue: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', wed: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', thu: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', fri: '11:00 am - 10:00 pm', sat: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', sun: '11:00 am - 10:00 pm' },
  {rid: 2, mon: '11:00 am - 4:00 pm\n5:00 pm - 11:00 pm', tue: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', wed: '11:00 am - 3:00 pm\n6:00 pm - 9:00 pm', thu: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', fri: '11:00 am - 6:00 pm\n9:00 pm - 12:00 am', sat: '11:00 am - 2:00 pm\n5:00 pm - 11:00 pm', sun: '11:00 am - 3:00 pm\n6:00 pm - 11:00 pm' },
  {rid: 3, mon: '11:00 am - 10:00 pm', tue: '11:00 am - 2:00 pm', wed: '11:00 am - 10:00 pm', thu: '11:00 am - 2:00 pm', fri: '11:00 am - 10:00 pm', sat: '11:00 am - 2:00 pm', sun: '11:00 am - 10:00 pm' },
  {rid: 4, mon: '5:08 am - 12:57 pm\n7:55 pm - 8:36 pm', tue: '9:07 am - 9:20 pm', wed: '7:03 am - 10:37 pm', thu: '10:03 am - 12:21 am', fri: '10:30 am - 12:18 am', sat: '5:41 am - 3:08 pm\n4:30 pm - 7:16 pm', sun: '10:06 am - 11:46 pm' },
  {rid: 5, mon: '9:25 am - 12:55 am', tue: '6:58 am - 12:20 am', wed: '6:09 am - 2:14 pm\n4:28 pm - 12:33 am', thu: '10:57 am - 3:06 pm\n7:12 pm - 8:52 pm', fri: '10:25 am - 5:58 pm\n8:31 pm - 10:04 pm', sat: '11:24 am - 12:21 pm\n5:53 pm - 11:26 pm', sun: '11:44 am - 12:38 am' },
  {rid: 6, mon: '6:45 am - 5:24 pm\n6:56 pm - 12:03 am', tue: '10:34 am - 1:11 pm\n7:26 pm - 12:49 am', wed: '12:05 pm - 11:26 pm', thu: '11:45 am - 4:25 pm\n6:46 pm - 10:04 pm', fri: '6:27 am - 5:16 pm\n8:41 pm - 10:23 pm', sat: '9:52 am - 7:01 pm', sun: '5:56 am - 3:31 pm\n8:48 pm - 11:41 pm' },
  {rid: 7, mon: '7:32 am - 2:37 pm\n7:01 pm - 7:11 pm', tue: '5:41 am - 2:48 pm\n6:36 pm - 9:25 pm', wed: '7:41 am - 1:32 pm\n5:18 pm - 7:28 pm', thu: '7:24 am - 5:02 pm\n5:38 pm - 7:08 pm', fri: '11:17 am - 7:13 pm', sat: '8:00 am - 10:37 pm', sun: '12:16 pm - 12:42 pm\n8:58 pm - 10:12 pm' },
  {rid: 8, mon: '7:46 am - 12:41 am', tue: '5:13 am - 9:16 pm', wed: '6:26 am - 3:13 pm\n8:32 pm - 8:32 pm', thu: '6:36 am - 12:36 pm\n7:55 pm - 8:34 pm', fri: '11:52 am - 7:55 pm', sat: '10:57 am - 9:02 pm', sun: '8:04 am - 10:17 pm' },
  {rid: 9, mon: '12:13 pm - 9:07 pm', tue: '8:28 am - 12:32 pm\n5:39 pm - 12:17 am', wed: '11:39 am - 12:35 am', thu: '11:00 am - 7:53 pm', fri: '11:19 am - 4:04 pm\n4:04 pm - 8:33 pm', sat: '11:42 am - 7:16 pm', sun: '6:09 am - 3:31 pm\n7:42 pm - 11:16 pm' },
  {rid: 10, mon: '8:10 am - 12:10 pm\n6:27 pm - 7:51 pm', tue: '12:01 pm - 4:04 pm\n4:56 pm - 12:25 am', wed: '10:27 am - 12:25 am', thu: '8:25 am - 11:56 pm', fri: '10:22 am - 10:44 pm', sat: '11:18 am - 11:11 pm', sun: '12:11 pm - 2:11 pm\n6:19 pm - 7:57 pm' },
  {rid: 11, mon: '12:56 pm - 8:50 pm', tue: '6:53 am - 10:37 pm', wed: '9:28 am - 4:36 pm\n6:47 pm - 7:06 pm', thu: '10:33 am - 5:20 pm\n4:04 pm - 8:59 pm', fri: '8:37 am - 10:10 pm', sat: '7:15 am - 4:03 pm\n6:21 pm - 12:50 am', sun: '5:25 am - 5:14 pm\n6:44 pm - 7:55 pm' },
  {rid: 12, mon: '9:39 am - 1:58 pm\n6:03 pm - 9:22 pm', tue: '5:40 am - 8:13 pm', wed: '6:47 am - 4:28 pm\n4:47 pm - 7:39 pm', thu: '7:26 am - 7:58 pm', fri: '9:52 am - 8:21 pm', sat: '9:08 am - 5:13 pm\n6:35 pm - 9:54 pm', sun: '11:35 am - 12:20 pm\n7:38 pm - 7:12 pm' },
  {rid: 13, mon: '8:46 am - 4:48 pm\n8:25 pm - 9:04 pm', tue: '7:04 am - 11:06 pm', wed: '10:20 am - 11:15 pm', thu: '12:06 pm - 8:31 pm', fri: '5:52 am - 5:54 pm\n8:39 pm - 11:35 pm', sat: '5:45 am - 4:49 pm\n6:30 pm - 12:34 am', sun: '5:07 am - 4:15 pm\n6:14 pm - 7:08 pm' } ,
  {rid: 14, mon: '6:44 am - 3:05 pm\n4:53 pm - 7:15 pm', tue: '10:57 am - 5:05 pm\n8:08 pm - 11:52 pm', wed: '12:17 pm - 2:19 pm\n5:39 pm - 12:55 am', thu: '12:24 pm - 2:31 pm\n6:55 pm - 9:41 pm', fri: '12:30 pm - 12:43 pm\n5:16 pm - 8:25 pm', sat: '11:25 am - 3:42 pm\n7:30 pm - 11:17 pm', sun: '12:16 pm - 9:14 pm' },
  {rid: 15, mon: '9:59 am - 4:29 pm\n6:46 pm - 12:47 am', tue: '11:32 am - 12:20 am', wed: '10:00 am - 7:34 pm', thu: '11:50 am - 10:56 pm', fri: '12:34 pm - 3:59 pm\n5:30 pm - 12:55 am', sat: '8:13 am - 12:54 am', sun: '11:23 am - 12:31 pm\n4:01 pm - 8:16 pm' },
  {rid: 16, mon: '7:30 am - 10:34 pm', tue: '6:41 am - 7:08 pm', wed: '6:46 am - 12:43 pm\n7:02 pm - 10:45 pm', thu: '9:56 am - 9:02 pm', fri: '12:41 pm - 5:15 pm\n8:04 pm - 7:47 pm', sat: '11:54 am - 12:56 am', sun: '11:03 am - 1:56 pm\n8:26 pm - 9:34 pm' },
  {rid: 17, mon: '5:38 am - 7:57 pm', tue: '11:55 am - 8:17 pm', wed: '9:13 am - 10:26 pm', thu: '5:26 am - 1:27 pm\n5:59 pm - 7:47 pm', fri: '9:24 am - 4:11 pm\n8:29 pm - 8:24 pm', sat: '11:05 am - 5:25 pm\n8:18 pm - 10:03 pm', sun: '9:47 am - 8:33 pm' },
  {rid: 18, mon: '9:06 am - 12:04 am', tue: '6:56 am - 12:39 pm\n7:06 pm - 8:07 pm', wed: '7:35 am - 12:07 am', thu: '7:34 am - 5:17 pm\n6:47 pm - 11:28 pm', fri: '11:06 am - 2:10 pm\n6:24 pm - 10:22 pm', sat: '9:28 am - 4:00 pm\n8:41 pm - 11:12 pm', sun: '8:20 am - 1:26 pm\n7:41 pm - 10:57 pm' },
  {rid: 19, mon: '7:18 am - 12:21 am', tue: '12:40 pm - 12:36 pm\n7:10 pm - 11:43 pm', wed: '9:16 am - 11:40 pm', thu: '12:19 pm - 8:43 pm', fri: '12:01 pm - 7:08 pm', sat: '10:08 am - 8:09 pm', sun: '5:52 am - 1:28 pm\n7:00 pm - 8:48 pm' },
  {rid: 20, mon: '5:12 am - 1:45 pm\n7:06 pm - 10:20 pm', tue: '6:09 am - 12:11 am', wed: '7:33 am - 10:04 pm', thu: '8:50 am - 2:26 pm\n4:55 pm - 12:14 am', fri: '5:19 am - 12:50 pm\n5:30 pm - 10:29 pm', sat: '5:28 am - 4:38 pm\n7:33 pm - 10:00 pm', sun: '12:38 pm - 11:09 pm' },
  {rid: 21, mon: '5:13 am - 3:59 pm\n8:41 pm - 7:52 pm', tue: '8:09 am - 2:24 pm\n5:08 pm - 12:23 am', wed: '7:02 am - 10:14 pm', thu: '11:10 am - 1:04 pm\n5:45 pm - 12:34 am', fri: '10:33 am - 8:22 pm', sat: '10:46 am - 8:18 pm', sun: '10:08 am - 9:19 pm' },
  {rid: 22, mon: '10:46 am - 5:31 pm\n8:02 pm - 8:38 pm', tue: '8:22 am - 12:36 pm\n6:00 pm - 8:39 pm', wed: '6:48 am - 10:08 pm', thu: '10:48 am - 5:27 pm\n7:41 pm - 9:29 pm', fri: '11:36 am - 3:04 pm\n8:11 pm - 10:53 pm', sat: '5:30 am - 3:49 pm\n8:12 pm - 8:40 pm', sun: '11:55 am - 9:02 pm' },
  {rid: 23, mon: '11:19 am - 12:23 pm\n6:32 pm - 8:18 pm', tue: '7:25 am - 8:37 pm', wed: '8:06 am - 5:29 pm\n6:31 pm - 8:17 pm', thu: '7:59 am - 2:43 pm\n6:02 pm - 12:18 am', fri: '9:52 am - 5:21 pm\n6:41 pm - 12:14 am', sat: '10:17 am - 7:27 pm', sun: '11:19 am - 12:33 am' },
  {rid: 24, mon: '12:31 pm - 3:08 pm\n5:05 pm - 12:30 am', tue: '9:25 am - 10:12 pm', wed: '9:17 am - 9:48 pm', thu: '9:21 am - 4:18 pm\n5:47 pm - 12:11 am', fri: '11:02 am - 8:22 pm', sat: '10:56 am - 4:41 pm\n4:34 pm - 9:29 pm', sun: '10:38 am - 11:05 pm' },
  {rid: 25, mon: '8:53 am - 4:08 pm\n8:02 pm - 11:40 pm', tue: '11:42 am - 9:47 pm', wed: '10:56 am - 8:44 pm', thu: '8:26 am - 10:17 pm', fri: '5:35 am - 9:45 pm', sat: '10:38 am - 10:05 pm', sun: '5:30 am - 11:40 pm' },
  {rid: 26, mon: '12:06 pm - 9:04 pm', tue: '12:20 pm - 3:18 pm\n4:40 pm - 12:18 am', wed: '6:14 am - 12:56 pm\n7:14 pm - 10:44 pm', thu: '10:05 am - 7:37 pm', fri: '12:41 pm - 2:42 pm\n5:50 pm - 11:06 pm', sat: '11:23 am - 8:56 pm', sun: '10:17 am - 10:49 pm' },
  {rid: 27, mon: '8:59 am - 2:49 pm\n7:33 pm - 8:31 pm', tue: '6:19 am - 7:19 pm', wed: '8:19 am - 4:00 pm\n8:00 pm - 11:35 pm', thu: '6:08 am - 3:40 pm\n4:17 pm - 11:52 pm', fri: '6:08 am - 11:15 pm', sat: '6:37 am - 10:18 pm', sun: '11:01 am - 1:22 pm\n7:47 pm - 8:25 pm' },
  {rid: 28, mon: '6:18 am - 9:06 pm', tue: '9:03 am - 2:52 pm\n4:56 pm - 11:10 pm', wed: '10:08 am - 1:57 pm\n6:46 pm - 11:38 pm', thu: '6:51 am - 1:22 pm\n5:12 pm - 7:28 pm', fri: '10:16 am - 9:35 pm', sat: '9:10 am - 12:11 pm\n6:25 pm - 10:49 pm', sun: '10:59 am - 4:59 pm\n7:54 pm - 8:25 pm' },
  {rid: 29, mon: '11:43 am - 8:15 pm', tue: '9:02 am - 1:47 pm\n8:35 pm - 8:59 pm', wed: '8:48 am - 4:14 pm\n8:05 pm - 12:15 am', thu: '11:28 am - 12:37 pm\n4:48 pm - 12:15 am', fri: '12:23 pm - 9:35 pm', sat: '11:13 am - 5:59 pm\n4:41 pm - 11:57 pm', sun: '8:51 am - 5:28 pm\n5:53 pm - 12:03 am' },
  {rid: 30, mon: '7:47 am - 12:50 am', tue: '8:52 am - 11:16 pm', wed: '5:20 am - 3:08 pm\n4:45 pm - 7:53 pm', thu: '6:23 am - 2:57 pm\n8:52 pm - 11:26 pm', fri: '9:10 am - 4:21 pm\n8:46 pm - 7:42 pm', sat: '11:45 am - 3:48 pm\n8:48 pm - 9:13 pm', sun: '5:17 am - 5:09 pm\n6:26 pm - 8:54 pm' },
  {rid: 31, mon: '6:55 am - 11:50 pm', tue: '12:55 pm - 1:52 pm\n5:37 pm - 7:56 pm', wed: '8:59 am - 10:30 pm', thu: '6:09 am - 7:05 pm', fri: '7:34 am - 9:06 pm', sat: '8:29 am - 7:33 pm', sun: '6:43 am - 10:09 pm' },
  {rid: 32, mon: '12:02 pm - 5:49 pm\n7:45 pm - 12:32 am', tue: '6:55 am - 10:10 pm', wed: '6:19 am - 5:47 pm\n8:25 pm - 9:10 pm', thu: '8:20 am - 4:40 pm\n8:05 pm - 9:11 pm', fri: '7:18 am - 8:14 pm', sat: '6:12 am - 7:53 pm', sun: '5:56 am - 4:03 pm\n5:35 pm - 11:17 pm' },
  {rid: 33, mon: '11:58 am - 11:07 pm', tue: '6:17 am - 5:31 pm\n7:04 pm - 9:16 pm', wed: '9:09 am - 8:13 pm', thu: '8:51 am - 5:02 pm\n8:05 pm - 11:43 pm', fri: '9:08 am - 1:17 pm\n8:14 pm - 11:56 pm', sat: '12:54 pm - 10:46 pm', sun: '5:24 am - 1:56 pm\n7:50 pm - 7:56 pm' },
  {rid: 34, mon: '9:39 am - 11:39 pm', tue: '10:08 am - 11:25 pm', wed: '11:46 am - 1:24 pm\n6:06 pm - 10:07 pm', thu: '5:45 am - 9:46 pm', fri: '10:24 am - 5:01 pm\n4:04 pm - 9:22 pm', sat: '9:47 am - 4:20 pm\n4:01 pm - 10:21 pm', sun: '11:39 am - 2:49 pm\n8:27 pm - 7:22 pm' },
  {rid: 35, mon: '5:32 am - 9:47 pm', tue: '6:14 am - 12:18 pm\n7:00 pm - 11:03 pm', wed: '9:22 am - 8:25 pm', thu: '10:54 am - 5:54 pm\n4:48 pm - 7:16 pm', fri: '10:29 am - 10:21 pm', sat: '10:09 am - 5:42 pm\n4:02 pm - 11:54 pm', sun: '12:54 pm - 12:07 am' },
  {rid: 36, mon: '8:48 am - 11:40 pm', tue: '8:05 am - 3:53 pm\n4:35 pm - 7:43 pm', wed: '9:26 am - 4:20 pm\n4:13 pm - 10:57 pm', thu: '8:49 am - 3:24 pm\n8:15 pm - 7:59 pm', fri: '6:25 am - 4:39 pm\n5:04 pm - 7:48 pm', sat: '10:42 am - 10:17 pm', sun: '12:54 pm - 11:30 pm' },
  {rid: 37, mon: '12:26 pm - 11:11 pm', tue: '9:29 am - 7:04 pm', wed: '11:56 am - 1:47 pm\n8:50 pm - 10:27 pm', thu: '5:50 am - 7:46 pm', fri: '8:58 am - 12:11 am', sat: '7:40 am - 3:15 pm\n4:24 pm - 8:36 pm', sun: '7:07 am - 5:20 pm\n4:48 pm - 11:51 pm' },
  {rid: 38, mon: '6:42 am - 2:56 pm\n7:20 pm - 12:41 am', tue: '9:47 am - 12:36 am', wed: '9:40 am - 3:15 pm\n5:21 pm - 10:57 pm', thu: '6:53 am - 10:58 pm', fri: '8:55 am - 8:35 pm', sat: '12:21 pm - 2:57 pm\n6:39 pm - 12:01 am', sun: '11:53 am - 11:41 pm' },
  {rid: 39, mon: '10:50 am - 2:28 pm\n7:10 pm - 12:44 am', tue: '5:58 am - 7:49 pm', wed: '11:23 am - 7:57 pm', thu: '9:49 am - 8:34 pm', fri: '5:49 am - 7:20 pm', sat: '12:39 pm - 1:11 pm\n6:49 pm - 11:12 pm', sun: '11:36 am - 12:49 am' },
  {rid: 40, mon: '8:12 am - 12:47 pm\n5:19 pm - 7:18 pm', tue: '6:41 am - 4:20 pm\n4:45 pm - 9:25 pm', wed: '12:11 pm - 7:38 pm', thu: '5:06 am - 11:32 pm', fri: '10:03 am - 8:25 pm', sat: '9:23 am - 11:38 pm', sun: '5:53 am - 10:00 pm' },
  {rid: 41, mon: '12:59 pm - 4:48 pm\n4:58 pm - 12:26 am', tue: '8:35 am - 2:59 pm\n7:42 pm - 8:18 pm', wed: '10:50 am - 10:24 pm', thu: '6:31 am - 9:16 pm', fri: '9:44 am - 7:04 pm', sat: '9:30 am - 5:12 pm\n5:22 pm - 9:41 pm', sun: '7:04 am - 7:14 pm' },
  {rid: 42, mon: '6:16 am - 1:59 pm\n7:39 pm - 7:44 pm', tue: '10:28 am - 10:44 pm', wed: '12:49 pm - 2:33 pm\n6:41 pm - 10:52 pm', thu: '11:14 am - 3:42 pm\n8:52 pm - 7:58 pm', fri: '12:49 pm - 10:52 pm', sat: '11:04 am - 1:59 pm\n6:39 pm - 7:09 pm', sun: '11:54 am - 5:45 pm\n7:53 pm - 12:46 am' },
  {rid: 43, mon: '5:28 am - 1:48 pm\n6:47 pm - 11:16 pm', tue: '7:25 am - 12:00 pm\n6:34 pm - 11:59 pm', wed: '6:08 am - 4:34 pm\n7:35 pm - 7:11 pm', thu: '6:36 am - 8:33 pm', fri: '11:54 am - 7:56 pm', sat: '10:54 am - 12:07 am', sun: '6:50 am - 12:29 pm\n5:16 pm - 7:06 pm' },
  {rid: 44, mon: '7:00 am - 12:34 pm\n6:25 pm - 12:39 am', tue: '10:05 am - 4:39 pm\n5:02 pm - 10:00 pm', wed: '8:37 am - 1:51 pm\n7:18 pm - 12:56 am', thu: '11:00 am - 3:35 pm\n5:21 pm - 7:22 pm', fri: '6:18 am - 9:42 pm', sat: '12:31 pm - 4:14 pm\n8:32 pm - 10:57 pm', sun: '10:26 am - 12:11 am' },
  {rid: 45, mon: '9:11 am - 11:45 pm', tue: '6:13 am - 10:18 pm', wed: '5:00 am - 7:15 pm', thu: '11:26 am - 9:06 pm', fri: '12:49 pm - 1:27 pm\n8:45 pm - 7:56 pm', sat: '12:50 pm - 12:45 pm\n5:27 pm - 10:06 pm', sun: '7:20 am - 2:25 pm\n6:25 pm - 8:56 pm' },
  {rid: 46, mon: '10:46 am - 10:34 pm', tue: '10:24 am - 12:02 pm\n4:33 pm - 10:57 pm', wed: '12:49 pm - 1:29 pm\n8:08 pm - 8:22 pm', thu: '8:55 am - 8:56 pm', fri: '6:16 am - 7:07 pm', sat: '5:36 am - 3:44 pm\n7:10 pm - 12:09 am', sun: '5:38 am - 9:56 pm' },
  {rid: 47, mon: '6:35 am - 11:23 pm', tue: '11:52 am - 11:48 pm', wed: '6:20 am - 4:23 pm\n5:05 pm - 7:34 pm', thu: '10:46 am - 12:04 pm\n7:14 pm - 12:27 am', fri: '12:29 pm - 10:18 pm', sat: '8:07 am - 4:58 pm\n8:43 pm - 11:29 pm', sun: '10:10 am - 4:11 pm\n6:49 pm - 10:18 pm' },
  {rid: 48, mon: '10:10 am - 4:24 pm\n8:00 pm - 9:15 pm', tue: '8:37 am - 1:59 pm\n4:13 pm - 10:03 pm', wed: '9:46 am - 7:23 pm', thu: '5:26 am - 5:35 pm\n6:16 pm - 8:57 pm', fri: '11:14 am - 11:29 pm', sat: '12:23 pm - 1:09 pm\n6:00 pm - 12:44 am', sun: '6:52 am - 2:03 pm\n4:41 pm - 8:28 pm' },
  {rid: 49, mon: '6:31 am - 2:31 pm\n5:50 pm - 8:38 pm', tue: '10:32 am - 3:12 pm\n8:45 pm - 7:30 pm', wed: '6:44 am - 3:06 pm\n4:37 pm - 7:16 pm', thu: '12:39 pm - 12:17 am', fri: '5:27 am - 2:05 pm\n7:31 pm - 8:54 pm', sat: '12:46 pm - 2:25 pm\n8:43 pm - 7:57 pm', sun: '10:02 am - 2:41 pm\n6:18 pm - 11:05 pm' },
  {rid: 50, mon: '12:02 pm - 1:46 pm\n8:49 pm - 9:13 pm', tue: '7:48 am - 5:18 pm\n8:02 pm - 9:44 pm', wed: '10:44 am - 9:29 pm', thu: '12:02 pm - 12:05 pm\n8:17 pm - 11:46 pm', fri: '10:47 am - 5:33 pm\n8:01 pm - 9:28 pm', sat: '9:01 am - 10:45 pm', sun: '9:59 am - 1:12 pm\n5:20 pm - 10:20 pm' },
  {rid: 51, mon: '12:19 pm - 4:36 pm\n7:38 pm - 10:03 pm', tue: '6:10 am - 8:26 pm', wed: '8:24 am - 12:36 pm\n6:45 pm - 11:35 pm', thu: '8:36 am - 8:22 pm', fri: '6:00 am - 8:46 pm', sat: '7:08 am - 3:10 pm\n5:02 pm - 7:35 pm', sun: '11:33 am - 10:42 pm' },
  {rid: 52, mon: '5:55 am - 12:37 am', tue: '10:43 am - 10:35 pm', wed: '9:48 am - 12:22 pm\n5:05 pm - 10:29 pm', thu: '12:14 pm - 10:32 pm', fri: '9:39 am - 4:03 pm\n8:29 pm - 8:39 pm', sat: '9:03 am - 2:01 pm\n5:57 pm - 7:08 pm', sun: '6:02 am - 4:19 pm\n5:21 pm - 9:36 pm' },
  {rid: 53, mon: '7:06 am - 4:09 pm\n5:40 pm - 12:44 am', tue: '11:12 am - 10:22 pm', wed: '8:25 am - 4:05 pm\n4:13 pm - 8:38 pm', thu: '9:45 am - 12:09 pm\n4:57 pm - 11:12 pm', fri: '10:11 am - 12:42 am', sat: '12:30 pm - 3:51 pm\n5:36 pm - 10:58 pm', sun: '10:30 am - 12:06 am' },
  {rid: 54, mon: '10:23 am - 9:11 pm', tue: '10:25 am - 3:01 pm\n5:30 pm - 10:54 pm', wed: '8:33 am - 1:03 pm\n6:42 pm - 9:36 pm', thu: '9:06 am - 8:59 pm', fri: '5:28 am - 2:27 pm\n5:17 pm - 8:28 pm', sat: '8:38 am - 7:05 pm', sun: '8:21 am - 10:46 pm' },
  {rid: 55, mon: '8:06 am - 12:27 pm\n5:28 pm - 8:22 pm', tue: '7:54 am - 7:23 pm', wed: '6:21 am - 1:51 pm\n4:23 pm - 10:22 pm', thu: '8:48 am - 2:55 pm\n6:03 pm - 7:52 pm', fri: '9:53 am - 5:03 pm\n7:25 pm - 8:03 pm', sat: '7:00 am - 9:54 pm', sun: '5:49 am - 1:25 pm\n6:45 pm - 10:55 pm' },
  {rid: 56, mon: '8:43 am - 3:08 pm\n7:07 pm - 9:24 pm', tue: '7:07 am - 5:27 pm\n5:46 pm - 11:28 pm', wed: '9:58 am - 4:47 pm\n4:01 pm - 8:20 pm', thu: '10:33 am - 12:31 pm\n5:57 pm - 10:11 pm', fri: '6:11 am - 7:32 pm', sat: '9:13 am - 5:08 pm\n6:23 pm - 9:11 pm', sun: '10:31 am - 9:26 pm' },
  {rid: 57, mon: '11:10 am - 1:23 pm\n4:09 pm - 10:57 pm', tue: '7:11 am - 10:41 pm', wed: '9:21 am - 9:54 pm', thu: '12:45 pm - 2:36 pm\n4:19 pm - 7:57 pm', fri: '10:13 am - 12:39 pm\n5:22 pm - 12:44 am', sat: '10:53 am - 4:17 pm\n7:42 pm - 10:58 pm', sun: '12:45 pm - 12:29 am' },
  {rid: 58, mon: '8:39 am - 12:31 pm\n7:25 pm - 8:03 pm', tue: '5:14 am - 3:31 pm\n4:51 pm - 11:48 pm', wed: '5:35 am - 12:07 pm\n5:35 pm - 12:02 am', thu: '6:29 am - 7:04 pm', fri: '11:15 am - 7:25 pm', sat: '9:39 am - 7:20 pm', sun: '11:46 am - 7:41 pm' },
  {rid: 59, mon: '8:29 am - 5:20 pm\n6:25 pm - 9:29 pm', tue: '11:26 am - 9:34 pm', wed: '7:06 am - 1:34 pm\n8:02 pm - 10:08 pm', thu: '8:20 am - 3:26 pm\n4:13 pm - 9:26 pm', fri: '11:12 am - 8:49 pm', sat: '10:22 am - 5:50 pm\n6:47 pm - 12:53 am', sun: '9:39 am - 12:30 am' },
  {rid: 60, mon: '5:40 am - 5:18 pm\n4:11 pm - 9:58 pm', tue: '11:40 am - 3:38 pm\n5:16 pm - 7:20 pm', wed: '12:07 pm - 4:20 pm\n6:10 pm - 9:57 pm', thu: '11:30 am - 8:22 pm', fri: '7:53 am - 3:52 pm\n6:37 pm - 8:47 pm', sat: '7:12 am - 10:10 pm', sun: '8:07 am - 4:03 pm\n5:48 pm - 10:40 pm' },
  {rid: 61, mon: '12:34 pm - 3:22 pm\n4:42 pm - 12:18 am', tue: '12:03 pm - 7:04 pm', wed: '9:21 am - 7:09 pm', thu: '6:06 am - 7:41 pm', fri: '7:29 am - 8:05 pm', sat: '8:23 am - 12:46 pm\n4:44 pm - 10:04 pm', sun: '6:16 am - 1:23 pm\n4:20 pm - 7:40 pm' },
  {rid: 62, mon: '5:34 am - 12:20 pm\n8:27 pm - 8:51 pm', tue: '8:49 am - 9:27 pm', wed: '7:45 am - 12:48 am', thu: '7:37 am - 7:37 pm', fri: '7:28 am - 4:53 pm\n4:18 pm - 12:47 am', sat: '12:04 pm - 8:49 pm', sun: '11:49 am - 4:13 pm\n5:37 pm - 8:43 pm' },
  {rid: 63, mon: '7:35 am - 11:12 pm', tue: '9:50 am - 9:41 pm', wed: '12:09 pm - 10:42 pm', thu: '8:09 am - 9:05 pm', fri: '11:38 am - 5:04 pm\n7:28 pm - 12:42 am', sat: '8:45 am - 11:01 pm', sun: '7:49 am - 11:33 pm' },
  {rid: 64, mon: '10:00 am - 11:42 pm', tue: '10:28 am - 2:46 pm\n4:18 pm - 8:59 pm', wed: '7:24 am - 1:10 pm\n6:21 pm - 8:47 pm', thu: '6:50 am - 4:58 pm\n8:32 pm - 8:58 pm', fri: '12:03 pm - 9:21 pm', sat: '7:19 am - 5:21 pm\n6:45 pm - 8:10 pm', sun: '5:29 am - 7:47 pm' },
  {rid: 65, mon: '9:27 am - 4:19 pm\n4:39 pm - 10:10 pm', tue: '5:19 am - 12:55 pm\n6:11 pm - 7:43 pm', wed: '9:19 am - 1:32 pm\n5:44 pm - 10:51 pm', thu: '7:58 am - 3:26 pm\n5:39 pm - 9:58 pm', fri: '12:02 pm - 4:38 pm\n8:00 pm - 10:52 pm', sat: '9:09 am - 5:47 pm\n8:58 pm - 10:45 pm', sun: '7:34 am - 1:45 pm\n6:20 pm - 10:46 pm' },
  {rid: 66, mon: '5:40 am - 7:55 pm', tue: '10:49 am - 5:55 pm\n4:08 pm - 7:16 pm', wed: '10:06 am - 12:18 am', thu: '10:57 am - 3:07 pm\n8:14 pm - 7:25 pm', fri: '11:53 am - 9:07 pm', sat: '6:21 am - 3:56 pm\n8:05 pm - 11:56 pm', sun: '9:58 am - 1:41 pm\n6:27 pm - 8:19 pm' },
  {rid: 67, mon: '11:46 am - 5:08 pm\n4:02 pm - 9:37 pm', tue: '9:34 am - 7:09 pm', wed: '6:05 am - 9:15 pm', thu: '9:45 am - 11:22 pm', fri: '8:46 am - 1:21 pm\n5:21 pm - 7:06 pm', sat: '11:02 am - 4:59 pm\n5:59 pm - 10:53 pm', sun: '12:56 pm - 10:48 pm' },
  {rid: 68, mon: '10:59 am - 9:47 pm', tue: '9:18 am - 4:01 pm\n6:26 pm - 9:44 pm', wed: '10:03 am - 10:43 pm', thu: '8:15 am - 5:35 pm\n7:41 pm - 9:59 pm', fri: '10:59 am - 5:35 pm\n7:57 pm - 12:22 am', sat: '7:57 am - 2:06 pm\n8:52 pm - 10:59 pm', sun: '12:07 pm - 12:41 am' },
  {rid: 69, mon: '7:42 am - 8:43 pm', tue: '10:51 am - 4:30 pm\n5:52 pm - 7:21 pm', wed: '5:02 am - 4:45 pm\n8:54 pm - 9:20 pm', thu: '9:44 am - 1:16 pm\n8:35 pm - 10:03 pm', fri: '11:57 am - 5:40 pm\n6:41 pm - 10:10 pm', sat: '6:11 am - 7:51 pm', sun: '10:46 am - 1:18 pm\n4:49 pm - 12:20 am' },
  {rid: 70, mon: '6:08 am - 12:49 pm\n6:34 pm - 8:34 pm', tue: '7:41 am - 3:32 pm\n4:09 pm - 11:29 pm', wed: '7:04 am - 10:47 pm', thu: '7:37 am - 10:44 pm', fri: '7:25 am - 12:59 pm\n5:15 pm - 7:03 pm', sat: '12:44 pm - 9:55 pm', sun: '7:44 am - 5:17 pm\n7:26 pm - 11:54 pm' },
  {rid: 71, mon: '9:59 am - 7:15 pm', tue: '9:22 am - 4:07 pm\n5:45 pm - 10:57 pm', wed: '6:50 am - 3:44 pm\n4:26 pm - 12:14 am', thu: '7:13 am - 12:04 pm\n7:52 pm - 8:08 pm', fri: '5:55 am - 12:39 am', sat: '8:40 am - 9:22 pm', sun: '8:35 am - 12:58 pm\n6:00 pm - 12:38 am' },
  {rid: 72, mon: '11:38 am - 2:22 pm\n6:26 pm - 9:58 pm', tue: '12:41 pm - 12:48 am', wed: '8:53 am - 1:48 pm\n8:43 pm - 11:15 pm', thu: '9:00 am - 4:03 pm\n6:29 pm - 11:17 pm', fri: '12:22 pm - 12:21 pm\n7:57 pm - 8:32 pm', sat: '12:20 pm - 10:34 pm', sun: '5:08 am - 12:16 am' },
  {rid: 73, mon: '12:31 pm - 8:03 pm', tue: '8:12 am - 9:22 pm', wed: '5:49 am - 9:35 pm', thu: '11:33 am - 4:56 pm\n7:40 pm - 7:51 pm', fri: '8:07 am - 4:53 pm\n4:20 pm - 7:18 pm', sat: '6:05 am - 2:43 pm\n4:34 pm - 9:11 pm', sun: '8:34 am - 2:22 pm\n6:55 pm - 7:20 pm' },
  {rid: 74, mon: '7:37 am - 4:37 pm\n6:02 pm - 11:34 pm', tue: '12:59 pm - 1:08 pm\n7:26 pm - 11:27 pm', wed: '12:28 pm - 8:15 pm', thu: '11:54 am - 8:21 pm', fri: '10:42 am - 12:51 pm\n8:23 pm - 10:59 pm', sat: '9:32 am - 2:05 pm\n7:25 pm - 12:12 am', sun: '6:03 am - 10:04 pm' },
  {rid: 75, mon: '6:58 am - 7:31 pm', tue: '6:02 am - 9:35 pm', wed: '6:38 am - 12:54 am', thu: '11:26 am - 11:58 pm', fri: '7:32 am - 3:59 pm\n8:51 pm - 8:52 pm', sat: '8:24 am - 8:09 pm', sun: '6:03 am - 3:44 pm\n5:32 pm - 9:00 pm' },
  {rid: 76, mon: '10:27 am - 3:42 pm\n6:43 pm - 11:13 pm', tue: '5:38 am - 2:52 pm\n6:17 pm - 8:13 pm', wed: '12:36 pm - 11:13 pm', thu: '12:45 pm - 12:25 am', fri: '5:37 am - 2:30 pm\n6:22 pm - 11:11 pm', sat: '5:03 am - 1:27 pm\n5:08 pm - 11:20 pm', sun: '7:05 am - 4:59 pm\n6:35 pm - 7:43 pm' },
  {rid: 77, mon: '11:16 am - 4:52 pm\n8:44 pm - 12:05 am', tue: '11:27 am - 12:43 pm\n8:51 pm - 11:52 pm', wed: '6:21 am - 2:39 pm\n5:19 pm - 7:42 pm', thu: '5:34 am - 4:34 pm\n7:55 pm - 10:03 pm', fri: '6:32 am - 11:58 pm', sat: '5:56 am - 1:28 pm\n5:24 pm - 7:56 pm', sun: '11:34 am - 9:02 pm' },
  {rid: 78, mon: '6:11 am - 10:26 pm', tue: '5:09 am - 4:30 pm\n7:07 pm - 7:42 pm', wed: '6:05 am - 5:31 pm\n6:01 pm - 12:27 am', thu: '8:07 am - 10:45 pm', fri: '9:13 am - 7:35 pm', sat: '5:55 am - 1:26 pm\n8:18 pm - 12:49 am', sun: '10:54 am - 11:14 pm' },
  {rid: 79, mon: '11:37 am - 9:33 pm', tue: '7:26 am - 4:27 pm\n7:55 pm - 10:34 pm', wed: '6:23 am - 9:45 pm', thu: '11:15 am - 11:57 pm', fri: '7:25 am - 7:46 pm', sat: '11:28 am - 7:03 pm', sun: '12:10 pm - 7:10 pm' },
  {rid: 80, mon: '6:50 am - 5:36 pm\n4:55 pm - 9:52 pm', tue: '12:12 pm - 10:50 pm', wed: '9:12 am - 4:08 pm\n6:34 pm - 11:32 pm', thu: '6:21 am - 12:47 pm\n6:24 pm - 7:09 pm', fri: '9:47 am - 12:20 pm\n4:20 pm - 12:07 am', sat: '9:01 am - 10:42 pm', sun: '7:04 am - 4:06 pm\n7:29 pm - 11:36 pm' },
  {rid: 81, mon: '7:07 am - 2:12 pm\n4:18 pm - 12:01 am', tue: '5:47 am - 2:39 pm\n6:42 pm - 7:38 pm', wed: '9:31 am - 10:16 pm', thu: '5:59 am - 9:18 pm', fri: '11:02 am - 10:08 pm', sat: '6:42 am - 4:43 pm\n5:12 pm - 10:03 pm', sun: '8:51 am - 12:58 am' },
  {rid: 82, mon: '9:41 am - 2:27 pm\n7:37 pm - 9:12 pm', tue: '7:20 am - 11:36 pm', wed: '5:27 am - 7:45 pm', thu: '12:27 pm - 12:37 am', fri: '12:10 pm - 7:13 pm', sat: '7:59 am - 9:25 pm', sun: '10:50 am - 3:42 pm\n5:25 pm - 11:27 pm' },
  {rid: 83, mon: '8:16 am - 12:02 am', tue: '8:22 am - 1:03 pm\n6:33 pm - 12:13 am', wed: '12:36 pm - 4:27 pm\n5:26 pm - 10:18 pm', thu: '11:05 am - 7:44 pm', fri: '11:30 am - 3:35 pm\n4:41 pm - 7:55 pm', sat: '11:38 am - 11:29 pm', sun: '12:54 pm - 7:40 pm' },
  {rid: 84, mon: '5:53 am - 1:24 pm\n6:46 pm - 11:59 pm', tue: '7:28 am - 7:24 pm', wed: '6:10 am - 3:46 pm\n8:58 pm - 11:18 pm', thu: '12:44 pm - 5:06 pm\n6:00 pm - 8:50 pm', fri: '12:21 pm - 12:47 pm\n8:36 pm - 10:09 pm', sat: '5:05 am - 7:19 pm', sun: '7:06 am - 5:37 pm\n4:59 pm - 10:26 pm' },
  {rid: 85, mon: '11:22 am - 12:57 am', tue: '12:31 pm - 5:26 pm\n8:27 pm - 8:50 pm', wed: '6:55 am - 3:33 pm\n7:30 pm - 9:55 pm', thu: '11:58 am - 8:58 pm', fri: '8:19 am - 4:04 pm\n7:01 pm - 10:36 pm', sat: '5:16 am - 2:22 pm\n6:02 pm - 10:33 pm', sun: '9:11 am - 12:01 am' },
  {rid: 86, mon: '9:16 am - 7:58 pm', tue: '5:49 am - 12:43 am', wed: '8:01 am - 9:44 pm', thu: '11:15 am - 7:06 pm', fri: '6:56 am - 7:47 pm', sat: '12:37 pm - 4:01 pm\n8:17 pm - 10:05 pm', sun: '10:59 am - 1:06 pm\n4:48 pm - 10:00 pm' },
  {rid: 87, mon: '7:41 am - 3:56 pm\n8:59 pm - 12:02 am', tue: '5:37 am - 12:40 pm\n6:44 pm - 7:45 pm', wed: '10:05 am - 10:28 pm', thu: '7:36 am - 9:04 pm', fri: '6:44 am - 12:53 pm\n7:35 pm - 9:50 pm', sat: '11:35 am - 5:54 pm\n7:52 pm - 10:50 pm', sun: '7:44 am - 12:42 pm\n4:29 pm - 10:04 pm' },
  {rid: 88, mon: '9:31 am - 10:22 pm', tue: '12:24 pm - 11:49 pm', wed: '7:49 am - 9:02 pm', thu: '9:12 am - 8:40 pm', fri: '7:11 am - 12:57 am', sat: '7:52 am - 5:31 pm\n8:23 pm - 10:45 pm', sun: '5:02 am - 10:08 pm' },
  {rid: 89, mon: '9:04 am - 12:24 am', tue: '7:29 am - 3:34 pm\n8:27 pm - 9:05 pm', wed: '6:56 am - 3:46 pm\n4:47 pm - 11:26 pm', thu: '12:59 pm - 11:49 pm', fri: '12:27 pm - 8:58 pm', sat: '12:44 pm - 7:17 pm', sun: '11:10 am - 12:28 am' },
  {rid: 90, mon: '10:14 am - 10:36 pm', tue: '10:59 am - 8:58 pm', wed: '12:17 pm - 5:30 pm\n4:18 pm - 8:15 pm', thu: '5:03 am - 5:35 pm\n4:32 pm - 7:15 pm', fri: '10:26 am - 3:50 pm\n4:28 pm - 7:03 pm', sat: '7:57 am - 11:34 pm', sun: '12:51 pm - 8:40 pm' },
  {rid: 91, mon: '7:16 am - 10:41 pm', tue: '7:33 am - 3:17 pm\n6:00 pm - 9:05 pm', wed: '10:48 am - 11:41 pm', thu: '12:40 pm - 12:46 am', fri: '12:21 pm - 10:19 pm', sat: '5:50 am - 12:21 pm\n8:34 pm - 11:18 pm', sun: '7:49 am - 9:07 pm' },
  {rid: 92, mon: '7:43 am - 7:37 pm', tue: '12:00 pm - 5:20 pm\n5:22 pm - 7:00 pm', wed: '9:11 am - 8:53 pm', thu: '12:15 pm - 7:08 pm', fri: '7:11 am - 12:08 pm\n5:30 pm - 9:07 pm', sat: '6:03 am - 7:48 pm', sun: '10:13 am - 12:02 am' },
  {rid: 93, mon: '11:32 am - 2:53 pm\n8:59 pm - 12:38 am', tue: '6:42 am - 9:42 pm', wed: '7:47 am - 5:05 pm\n6:10 pm - 12:36 am', thu: '10:32 am - 11:45 pm', fri: '9:28 am - 11:20 pm', sat: '11:19 am - 3:56 pm\n8:33 pm - 8:44 pm', sun: '8:59 am - 7:08 pm' },
  {rid: 94, mon: '5:38 am - 12:12 am', tue: '8:03 am - 1:20 pm\n4:30 pm - 12:00 am', wed: '11:45 am - 10:50 pm', thu: '10:29 am - 1:04 pm\n8:23 pm - 7:39 pm', fri: '7:45 am - 3:55 pm\n7:46 pm - 7:59 pm', sat: '11:35 am - 12:45 am', sun: '11:26 am - 1:05 pm\n4:45 pm - 12:34 am' },
  {rid: 95, mon: '5:18 am - 2:56 pm\n8:51 pm - 12:19 am', tue: '11:31 am - 9:51 pm', wed: '8:36 am - 8:58 pm', thu: '6:55 am - 5:49 pm\n7:38 pm - 12:41 am', fri: '12:22 pm - 8:55 pm', sat: '7:59 am - 7:09 pm', sun: '11:14 am - 9:52 pm' },
  {rid: 96, mon: '5:17 am - 8:33 pm', tue: '10:49 am - 5:41 pm\n6:48 pm - 7:03 pm', wed: '9:22 am - 12:30 am', thu: '9:32 am - 12:00 pm\n4:40 pm - 10:25 pm', fri: '11:39 am - 12:37 am', sat: '9:02 am - 4:45 pm\n6:06 pm - 12:42 am', sun: '8:53 am - 7:59 pm' },
  {rid: 97, mon: '11:44 am - 2:55 pm\n4:06 pm - 8:57 pm', tue: '5:01 am - 10:51 pm', wed: '5:54 am - 10:07 pm', thu: '8:22 am - 1:57 pm\n6:01 pm - 11:10 pm', fri: '12:45 pm - 12:17 pm\n8:37 pm - 10:01 pm', sat: '11:33 am - 12:51 pm\n8:02 pm - 7:51 pm', sun: '11:31 am - 10:22 pm' },
  {rid: 98, mon: '8:49 am - 4:29 pm\n8:13 pm - 7:42 pm', tue: '11:04 am - 7:54 pm', wed: '10:25 am - 11:59 pm', thu: '5:38 am - 7:26 pm', fri: '6:46 am - 3:29 pm\n7:34 pm - 8:58 pm', sat: '8:58 am - 2:47 pm\n6:36 pm - 12:58 am', sun: '10:11 am - 2:10 pm\n7:09 pm - 7:59 pm' } ,
  {rid: 99, mon: '8:45 am - 8:43 pm', tue: '5:27 am - 4:09 pm\n4:37 pm - 7:58 pm', wed: '12:26 pm - 3:04 pm\n4:26 pm - 12:58 am', thu: '10:25 am - 11:39 pm', fri: '10:33 am - 1:29 pm\n8:27 pm - 9:14 pm', sat: '9:10 am - 2:13 pm\n5:51 pm - 9:26 pm', sun: '9:53 am - 1:30 pm\n6:24 pm - 11:07 pm' },
  {rid: 100, mon: '6:47 am - 7:14 pm', tue: '11:04 am - 9:14 pm', wed: '9:44 am - 12:38 pm\n6:38 pm - 11:55 pm', thu: '8:43 am - 4:05 pm\n4:00 pm - 12:48 am', fri: '8:07 am - 12:32 am', sat: '12:40 pm - 10:47 pm', sun: '10:50 am - 3:53 pm\n7:56 pm - 7:59 pm' }
];

const detailsData = [
  { rid: 1, today: '', price_range: '$30-40', health_score: 'C' },
  { rid: 2, today: '', price_range: '$50-100', health_score: 'B' },
  { rid: 3, today: '', price_range: '$57-72', health_score: 'D' },
  { rid: 4, today: '', price_range: '$17-27', health_score: 'F' },
  { rid: 5, today: '', price_range: '$27-38', health_score: 'D' },
  { rid: 6, today: '', price_range: '$46-66', health_score: 'F' },
  { rid: 7, today: '', price_range: '$5-9', health_score: 'D' },
  { rid: 8, today: '', price_range: '$23-44', health_score: 'E' },
  { rid: 9, today: '', price_range: '$31-59', health_score: 'A' },
  { rid: 10, today: '', price_range: '$10-13', health_score: 'E' },
  { rid: 11, today: '', price_range: '$36-48', health_score: 'D' },
  { rid: 12, today: '', price_range: '$32-37', health_score: 'F' },
  { rid: 13, today: '', price_range: '$46-81', health_score: 'E' },
  { rid: 14, today: '', price_range: '$46-69', health_score: 'A' },
  { rid: 15, today: '', price_range: '$49-77', health_score: 'B' },
  { rid: 16, today: '', price_range: '$33-35', health_score: 'C' },
  { rid: 17, today: '', price_range: '$36-56', health_score: 'A' },
  { rid: 18, today: '', price_range: '$21-41', health_score: 'D' },
  { rid: 19, today: '', price_range: '$37-41', health_score: 'E' },
  { rid: 20, today: '', price_range: '$57-95', health_score: 'F' },
  { rid: 21, today: '', price_range: '$15-20', health_score: 'C' },
  { rid: 22, today: '', price_range: '$20-28', health_score: 'A' },
  { rid: 23, today: '', price_range: '$21-26', health_score: 'C' },
  { rid: 24, today: '', price_range: '$32-43', health_score: 'A' },
  { rid: 25, today: '', price_range: '$9-13', health_score: 'A' },
  { rid: 26, today: '', price_range: '$51-78', health_score: 'A' },
  { rid: 27, today: '', price_range: '$2-3', health_score: 'F' },
  { rid: 28, today: '', price_range: '$17-31', health_score: 'F' },
  { rid: 29, today: '', price_range: '$2-2', health_score: 'B' },
  { rid: 30, today: '', price_range: '$4-5', health_score: 'F' },
  { rid: 31, today: '', price_range: '$52-60', health_score: 'C' },
  { rid: 32, today: '', price_range: '$35-54', health_score: 'E' },
  { rid: 33, today: '', price_range: '$9-17', health_score: 'A' },
  { rid: 34, today: '', price_range: '$24-37', health_score: 'E' },
  { rid: 35, today: '', price_range: '$11-11', health_score: 'A' },
  { rid: 36, today: '', price_range: '$39-75', health_score: 'C' },
  { rid: 37, today: '', price_range: '$6-11', health_score: 'F' },
  { rid: 38, today: '', price_range: '$35-46', health_score: 'B' },
  { rid: 39, today: '', price_range: '$50-74', health_score: 'C' },
  { rid: 40, today: '', price_range: '$59-90', health_score: 'F' },
  { rid: 41, today: '', price_range: '$7-9', health_score: 'A' },
  { rid: 42, today: '', price_range: '$59-64', health_score: 'F' },
  { rid: 43, today: '', price_range: '$55-61', health_score: 'A' },
  { rid: 44, today: '', price_range: '$35-68', health_score: 'F' },
  { rid: 45, today: '', price_range: '$47-63', health_score: 'D' },
  { rid: 46, today: '', price_range: '$47-64', health_score: 'E' },
  { rid: 47, today: '', price_range: '$3-5', health_score: 'C' },
  { rid: 48, today: '', price_range: '$1-1', health_score: 'B' },
  { rid: 49, today: '', price_range: '$33-53', health_score: 'F' },
  { rid: 50, today: '', price_range: '$40-54', health_score: 'F' },
  { rid: 51, today: '', price_range: '$20-27', health_score: 'A' },
  { rid: 52, today: '', price_range: '$5-8', health_score: 'E' },
  { rid: 53, today: '', price_range: '$59-71', health_score: 'F' },
  { rid: 54, today: '', price_range: '$46-50', health_score: 'F' },
  { rid: 55, today: '', price_range: '$0-0', health_score: 'C' },
  { rid: 56, today: '', price_range: '$12-17', health_score: 'F' },
  { rid: 57, today: '', price_range: '$30-41', health_score: 'E' },
  { rid: 58, today: '', price_range: '$2-2', health_score: 'F' },
  { rid: 59, today: '', price_range: '$24-24', health_score: 'D' },
  { rid: 60, today: '', price_range: '$57-108', health_score: 'F' },
  { rid: 61, today: '', price_range: '$55-58', health_score: 'A' },
  { rid: 62, today: '', price_range: '$41-67', health_score: 'A' },
  { rid: 63, today: '', price_range: '$50-71', health_score: 'A' },
  { rid: 64, today: '', price_range: '$9-15', health_score: 'C' },
  { rid: 65, today: '', price_range: '$40-53', health_score: 'F' },
  { rid: 66, today: '', price_range: '$20-33', health_score: 'E' },
  { rid: 67, today: '', price_range: '$14-23', health_score: 'F' },
  { rid: 68, today: '', price_range: '$18-20', health_score: 'F' },
  { rid: 69, today: '', price_range: '$31-33', health_score: 'D' },
  { rid: 70, today: '', price_range: '$1-1', health_score: 'E' },
  { rid: 71, today: '', price_range: '$49-55', health_score: 'F' },
  { rid: 72, today: '', price_range: '$56-82', health_score: 'A' },
  { rid: 73, today: '', price_range: '$29-40', health_score: 'E' },
  { rid: 74, today: '', price_range: '$5-7', health_score: 'E' },
  { rid: 75, today: '', price_range: '$35-43', health_score: 'A' },
  { rid: 76, today: '', price_range: '$6-6', health_score: 'F' },
  { rid: 77, today: '', price_range: '$19-22', health_score: 'B' },
  { rid: 78, today: '', price_range: '$29-37', health_score: 'D' },
  { rid: 79, today: '', price_range: '$15-29', health_score: 'E' },
  { rid: 80, today: '', price_range: '$5-5', health_score: 'A' },
  { rid: 81, today: '', price_range: '$44-72', health_score: 'E' },
  { rid: 82, today: '', price_range: '$57-64', health_score: 'B' },
  { rid: 83, today: '', price_range: '$57-57', health_score: 'B' },
  { rid: 84, today: '', price_range: '$21-30', health_score: 'F' },
  { rid: 85, today: '', price_range: '$6-8', health_score: 'D' },
  { rid: 86, today: '', price_range: '$42-60', health_score: 'B' },
  { rid: 87, today: '', price_range: '$26-33', health_score: 'C' },
  { rid: 88, today: '', price_range: '$21-25', health_score: 'E' },
  { rid: 89, today: '', price_range: '$52-88', health_score: 'A' },
  { rid: 90, today: '', price_range: '$26-48', health_score: 'B' },
  { rid: 91, today: '', price_range: '$12-17', health_score: 'D' },
  { rid: 92, today: '', price_range: '$35-60', health_score: 'A' },
  { rid: 93, today: '', price_range: '$41-58', health_score: 'A' },
  { rid: 94, today: '', price_range: '$46-91', health_score: 'B' },
  { rid: 95, today: '', price_range: '$3-4', health_score: 'A' },
  { rid: 96, today: '', price_range: '$51-84', health_score: 'C' },
  { rid: 97, today: '', price_range: '$44-56', health_score: 'C' },
  { rid: 98, today: '', price_range: '$36-67', health_score: 'B' },
  { rid: 99, today: '', price_range: '$40-71', health_score: 'F' },
  { rid: 100, today: '', price_range: '$54-101', health_score: 'F' }
]

const miscData = [
  { rid: 1, takes_reservations: 'Yes', takezout: 'No', accepts_credit_cards: 'Yes', accepts_apple_pay: 'No', good_for: 'No', parking: 'Street', bike_parking: 'None', wheelchair_accessible: 'Maybe', good_for_kids: 'Yup', good_for_groups: 'No', dogs_allowed: 'Ok', attire: 'Strict', ambience: 'Casual', noise_level: 'Loud', alcohol: 'Mild', outdoor_seating: 'No', wifi: 'Yes', has_tv: 'Yes', caters: 'No', gender_neutral_restrooms: 'No', smoking: 'No'},
  { rid: 2, takezout: 'Possibly', accepts_credit_cards: 'Maybe', accepts_apple_pay: 'Yup', good_for: 'No', parking: 'No', bike_parking: 'Yes', wheelchair_accessible: 'No', good_for_kids: 'Yes', good_for_groups: 'None', dogs_allowed: '?', attire: '?', noise_level: '?', outdoor_seating: 'You Wish', wifi: 'None', has_tv: 'Nope', caters: 'Yes', gender_neutral_restrooms: 'Yes', smoking: 'No' },
  { rid: 3, takes_reservations: 'Maybe', takezout: 'Yup', accepts_credit_cards: 'Yup', accepts_apple_pay: 'Yes', good_for: 'Yes', wheelchair_accessible: 'Yes', dogs_allowed: '?', attire: 'Yes', ambience: 'No', noise_level: 'Yes', alcohol: 'Maybe', outdoor_seating: 'No', wifi: 'Yup', has_tv: 'No', gender_neutral_restrooms: 'Yes', smoking: 'Yes' },
  { rid: 4, takes_reservations: 'No', takezout: 'You Wish', accepts_credit_cards: '?', accepts_apple_pay: 'No', good_for: 'No', bike_parking: '?', wheelchair_accessible: 'None', good_for_groups: 'Yes', dogs_allowed: 'None', wifi: 'Maybe', caters: 'Maybe' },
  { rid: 5, takes_reservations: 'Maybe', takezout: 'No', accepts_credit_cards: 'Yes', parking: 'Possibly', bike_parking: 'None', good_for_groups: 'No', dogs_allowed: 'Nope', attire: 'None', ambience: 'No', outdoor_seating: 'No', wifi: 'Yes', smoking: 'You Wish' }, { rid: 6, takes_reservations: 'None', takezout: 'No', accepts_apple_pay: 'Yes', good_for: 'Yup', parking: 'Yes', bike_parking: 'Yup', wheelchair_accessible: 'Yes', good_for_groups: 'Possibly', dogs_allowed: 'Maybe', attire: 'No', outdoor_seating: 'You Wish', has_tv: 'Possibly', caters: 'No', gender_neutral_restrooms: 'Yes', smoking: 'None' }, { rid: 7, accepts_credit_cards: 'Maybe', accepts_apple_pay: 'Yes', parking: 'No', bike_parking: 'You Wish', good_for_kids: 'Possibly', dogs_allowed: 'Yes', ambience: 'Yup', outdoor_seating: 'Yes', wifi: 'Yes', has_tv: 'Maybe', caters: 'No', gender_neutral_restrooms: 'Yes', smoking: 'Yup' },
  { rid: 8, takezout: 'No', accepts_credit_cards: 'None', accepts_apple_pay: 'Maybe', good_for: 'Yes', bike_parking: 'You Wish', wheelchair_accessible: 'Maybe', good_for_groups: 'Nope', dogs_allowed: '?', ambience: 'Yes', outdoor_seating: 'Yup', wifi: 'Nope', has_tv: 'No', caters: 'Maybe', smoking: 'Yup' },
  { rid: 9, takezout: 'Yes', accepts_apple_pay: 'Yes', good_for: 'You Wish', good_for_kids: 'Nope', good_for_groups: 'No', ambience: 'Yup', noise_level: 'None', alcohol: 'Yes', outdoor_seating: 'Yup', wifi: 'Nope', smoking: 'Yes' },
  { rid: 10, takes_reservations: 'Yes', takezout: 'Nope', accepts_credit_cards: 'No', good_for: '?', bike_parking: 'Yes', good_for_kids: 'Maybe', attire: 'Yes', noise_level: 'No', alcohol: 'You Wish', outdoor_seating: 'Yes', gender_neutral_restrooms: 'Nope' },
  { rid: 11, takes_reservations: 'Possibly', takezout: 'You Wish', accepts_apple_pay: 'No', bike_parking: 'Yes', good_for_groups: 'Yup', dogs_allowed: 'Possibly', attire: 'Yes', ambience: 'No', noise_level: 'Possibly', alcohol: 'No', outdoor_seating: 'Nope', wifi: 'Possibly', has_tv: 'Yup', smoking: 'Yes' },
  { rid: 12, bike_parking: 'No', good_for_groups: 'Yes', dogs_allowed: 'No', noise_level: 'Yes', alcohol: 'No', outdoor_seating: 'No', wifi: 'Yes', has_tv: 'Maybe', smoking: 'Maybe' },
  { rid: 13, takes_reservations: 'None', takezout: 'Yes', parking: 'Possibly', wheelchair_accessible: 'Yes', good_for_kids: 'No', good_for_groups: 'Yup', attire: 'Possibly', ambience: 'Yup', noise_level: 'Maybe', alcohol: 'Yup', wifi: 'Maybe', caters: 'Maybe', gender_neutral_restrooms: 'Yup' },
  { rid: 14, takezout: 'Yes', good_for: 'Yes', bike_parking: 'Maybe', wheelchair_accessible: 'Yes', good_for_kids: 'Possibly', dogs_allowed: 'Nope', ambience: 'No', noise_level: 'Yes', outdoor_seating: 'None', caters: 'Yes', gender_neutral_restrooms: '?' }, { rid: 15, takes_reservations: 'No', takezout: 'No', accepts_apple_pay: 'Possibly', good_for: 'Maybe', parking: 'No', wheelchair_accessible: 'Maybe', good_for_kids: 'None', good_for_groups: 'Maybe', noise_level: 'Nope', alcohol: 'None', wifi: 'Maybe', has_tv: 'No', gender_neutral_restrooms: 'No' },
  { rid: 16, accepts_credit_cards: 'Maybe', accepts_apple_pay: 'Yes', parking: 'Possibly', bike_parking: 'Yes', good_for_groups: 'No', noise_level: 'Possibly', alcohol: '?', wifi: 'Yes', has_tv: 'Nope', gender_neutral_restrooms: '?', smoking: 'You Wish' },
  { rid: 17, takes_reservations: 'No', takezout: 'Maybe', parking: '?', bike_parking: 'No', wheelchair_accessible: 'Yes', good_for_groups: 'No', dogs_allowed: 'Yes', alcohol: 'You Wish', wifi: 'Possibly', has_tv: 'Possibly', caters: 'Yes', smoking: 'Yes'},
  { rid: 18, takes_reservations: 'Yup', takezout: 'No', accepts_credit_cards: 'No', accepts_apple_pay: 'None', good_for: 'No', bike_parking: 'No', wheelchair_accessible: 'Yes', attire: 'No', noise_level: 'Yes', alcohol: 'None', wifi: 'Possibly', caters: 'Yes', gender_neutral_restrooms: 'Yes', smoking: 'Possibly' },
  { rid: 19, takes_reservations: 'Yes', accepts_credit_cards: 'No', accepts_apple_pay: 'None', bike_parking: 'Yes', wheelchair_accessible: 'Yes', good_for_groups: 'None', dogs_allowed: 'Maybe', attire: 'Yes', ambience: 'Nope', noise_level: 'Yes', alcohol: 'Yes', has_tv: 'Yup', caters: 'No', gender_neutral_restrooms: 'Maybe', smoking: 'Possibly' },
  { rid: 20, takes_reservations: 'Nope', accepts_apple_pay: 'Maybe', parking: 'None', bike_parking: 'Maybe', ambience: 'No', noise_level: '?', outdoor_seating: 'Yes', has_tv: 'No', gender_neutral_restrooms: 'Maybe', smoking: '?' },
  { rid: 21, accepts_apple_pay: '?', good_for: 'Maybe', bike_parking: 'Yup', wheelchair_accessible: 'No', good_for_kids: 'Yes', dogs_allowed: 'Yes', attire: 'Yes', ambience: 'Yup', outdoor_seating: 'Yes', gender_neutral_restrooms: 'No', smoking: 'Nope' },
  { rid: 22, accepts_credit_cards: 'No', accepts_apple_pay: 'Yes', parking: 'Possibly', bike_parking: 'Yes', good_for_kids: 'You Wish', dogs_allowed: 'No', ambience: 'None', has_tv: 'None', caters: 'Yes' },
  { rid: 23, takes_reservations: 'Nope', accepts_credit_cards: 'Nope', accepts_apple_pay: 'No', bike_parking: 'You Wish', wheelchair_accessible: 'No', good_for_groups: 'No', dogs_allowed: 'Maybe', attire: 'Nope', outdoor_seating: 'No', wifi: 'No', has_tv: 'No', caters: 'Nope', smoking: 'Yup' },
  { rid: 24, accepts_credit_cards: 'Yes', bike_parking: 'Yes', wheelchair_accessible: 'Yup', good_for_groups: 'No', dogs_allowed: 'Maybe', noise_level: 'Nope', alcohol: 'No', outdoor_seating: 'No', wifi: 'No', has_tv: 'None', caters: 'Yes' },
  { rid: 25, takes_reservations: 'Yup', takezout: 'Maybe', accepts_credit_cards: 'Maybe', good_for: 'Nope', parking: 'None', bike_parking: 'Maybe', good_for_kids: 'Yes', good_for_groups: 'No', dogs_allowed: 'Yes', alcohol: 'Nope', wifi: 'Yup', gender_neutral_restrooms: 'Yes', smoking: 'No' },
  { rid: 26, takes_reservations: 'Maybe', takezout: 'Nope', accepts_credit_cards: 'Maybe', accepts_apple_pay: 'None', good_for: 'Yes', parking: 'Yes', bike_parking: 'Yes', wheelchair_accessible: 'You Wish', good_for_kids: 'Yes', attire: 'No', ambience: 'Yes', noise_level: 'Maybe', alcohol: '?', outdoor_seating: 'Maybe', gender_neutral_restrooms: 'None' },
  { rid: 27, takes_reservations: '?', takezout: 'Yes', accepts_credit_cards: 'Maybe', wheelchair_accessible: 'You Wish', good_for_kids: 'Maybe', good_for_groups: 'None', alcohol: 'No', outdoor_seating: 'No', wifi: 'Yup', has_tv: 'No', caters: 'Yes', gender_neutral_restrooms: 'Yes' },
  { rid: 28, takes_reservations: 'None', takezout: 'Maybe', accepts_apple_pay: 'None', good_for: 'No', bike_parking: 'You Wish', good_for_groups: 'Maybe', ambience: 'None', noise_level: 'None', alcohol: 'None', outdoor_seating: 'Yes', wifi: 'Maybe', has_tv: 'None', smoking: '?' },
  { rid: 29, takezout: 'None', accepts_credit_cards: 'You Wish', wheelchair_accessible: 'None', good_for_kids: 'No', good_for_groups: 'You Wish', dogs_allowed: 'None', attire: 'You Wish', noise_level: 'Maybe', alcohol: 'Yes', outdoor_seating: 'Possibly', gender_neutral_restrooms: 'Yes' },
  { rid: 30, accepts_credit_cards: 'No', accepts_apple_pay: '?', good_for: 'Yes', bike_parking: 'No', wheelchair_accessible: 'Yup', dogs_allowed: 'None', attire: 'No', noise_level: 'None', alcohol: 'None', outdoor_seating: 'Yes', wifi: 'Nope', has_tv: 'No', caters: 'None', gender_neutral_restrooms: 'Yes', smoking: 'Yes' },
  { rid: 31, takes_reservations: 'Yes', accepts_credit_cards: 'No', accepts_apple_pay: 'No', good_for: 'No', parking: 'No', wheelchair_accessible: 'None', good_for_kids: 'Nope', good_for_groups: 'Yes', ambience: 'No', outdoor_seating: 'Yup', has_tv: 'Yes', smoking: 'None' },
  { rid: 32, takes_reservations: 'No', takezout: 'Maybe', accepts_credit_cards: 'No', parking: 'None', good_for_kids: 'Yes', good_for_groups: 'Possibly', attire: 'No', ambience: 'No', noise_level: 'Nope', alcohol: 'Yes', outdoor_seating: 'No', wifi: 'No', caters: '?', gender_neutral_restrooms: 'Nope' },
  { rid: 33, takes_reservations: 'No', takezout: 'Yes', accepts_credit_cards: 'No', accepts_apple_pay: 'Yes', good_for: 'Maybe', parking: 'Yes', bike_parking: 'Yes', wheelchair_accessible: 'Nope', good_for_kids: 'Nope', good_for_groups: 'No', dogs_allowed: 'Yes', attire: 'Yes', ambience: 'No', noise_level: 'Maybe', outdoor_seating: 'Yes', has_tv: 'You Wish', caters: 'Yup', smoking: 'Nope' },
  { rid: 34, takes_reservations: 'Yes', takezout: 'Maybe', accepts_apple_pay: 'Maybe', good_for: 'Yes', parking: 'No', bike_parking: 'No', good_for_kids: 'No', good_for_groups: 'Yes', ambience: 'Maybe', noise_level: 'Yup', outdoor_seating: 'Nope', has_tv: 'Yup', gender_neutral_restrooms: 'Maybe', smoking: 'None' },
  { rid: 35, takes_reservations: 'Yes', takezout: 'Yes', accepts_credit_cards: 'No', accepts_apple_pay: 'Maybe', parking: 'Possibly', bike_parking: 'Yes', good_for_groups: 'No', dogs_allowed: 'No', ambience: 'You Wish', noise_level: 'Yes', outdoor_seating: 'Yes', has_tv: 'Nope', gender_neutral_restrooms: 'Yup', smoking: '?' },
  { rid: 36, takes_reservations: 'Maybe', accepts_credit_cards: 'Possibly', good_for: '?', bike_parking: 'Maybe', wheelchair_accessible: 'Maybe', noise_level: 'No', alcohol: 'No', has_tv: 'No', caters: 'Nope', gender_neutral_restrooms: 'Nope', smoking: 'Maybe' },
  { rid: 37, takes_reservations: 'Yes', takezout: 'None', accepts_credit_cards: 'Possibly', accepts_apple_pay: 'Yes', parking: 'Maybe', bike_parking: '?', good_for_kids: 'No', good_for_groups: 'Possibly', dogs_allowed: 'Possibly', attire: 'Possibly', ambience: 'Nope', noise_level: 'No', alcohol: 'Nope', has_tv: 'Possibly', caters: 'No', smoking: '?' },
  { rid: 38, takes_reservations: 'Yes', takezout: 'Maybe', accepts_credit_cards: 'Yes', accepts_apple_pay: 'Yes', good_for: 'Maybe', parking: 'Yes', bike_parking: 'Yes', good_for_kids: 'Yes', dogs_allowed: 'Yes', ambience: 'You Wish', alcohol: 'Yes', outdoor_seating: 'Yes', caters: 'Maybe', smoking: 'Possibly' },
  { rid: 39, takes_reservations: 'No', takezout: 'Yes', accepts_apple_pay: 'Yes', parking: 'Yes', bike_parking: 'None', attire: 'Yes', ambience: 'No', outdoor_seating: 'Maybe', has_tv: 'No', caters: 'Yup', gender_neutral_restrooms: 'No' },
  { rid: 40, takes_reservations: 'Maybe', accepts_apple_pay: 'No', parking: 'Possibly', wheelchair_accessible: 'Yes', good_for_kids: 'No', good_for_groups: 'Maybe', dogs_allowed: 'You Wish', attire: 'No', alcohol: 'Yes', wifi: 'Possibly', has_tv: 'Yes', caters: 'No', smoking: 'None' },
  { rid: 41, takes_reservations: 'Yup', bike_parking: 'None', wheelchair_accessible: 'No', good_for_kids: 'Maybe', good_for_groups: 'No', dogs_allowed: 'No', attire: 'Yes', ambience: 'No', alcohol: 'Maybe', outdoor_seating: 'Nope', has_tv: 'You Wish' },
  { rid: 42, takes_reservations: 'Maybe', takezout: 'Yes', parking: 'No', wheelchair_accessible: 'None', good_for_kids: 'Maybe', good_for_groups: 'Yes', ambience: 'Yes', noise_level: 'Nope', outdoor_seating: 'Yes', caters: 'No', gender_neutral_restrooms: 'Yes', smoking: 'Yes' },
  { rid: 43, takes_reservations: 'Maybe', accepts_apple_pay: 'Yes', bike_parking: 'Yes', wheelchair_accessible: 'Yes', good_for_kids: 'Yes', dogs_allowed: 'No', attire: 'No', ambience: 'Yes', alcohol: 'Yes', outdoor_seating: 'Nope', wifi: 'Yes', caters: 'None', smoking: 'No' },
  { rid: 44, accepts_credit_cards: 'You Wish', parking: 'Nope', wheelchair_accessible: 'Yes', good_for_groups: 'No', dogs_allowed: 'Yes', ambience: 'Yes', noise_level: 'Possibly', outdoor_seating: 'No', gender_neutral_restrooms: 'None' },
  { rid: 45, takes_reservations: '?', accepts_credit_cards: 'None', good_for: 'Nope', parking: 'Maybe', bike_parking: 'No', wheelchair_accessible: 'None', good_for_kids: 'Yes', dogs_allowed: 'Maybe', ambience: 'Nope', noise_level: 'No', alcohol: 'No', has_tv: 'Yes', caters: 'No', gender_neutral_restrooms: 'Possibly', smoking: 'Maybe' },
  { rid: 46, takezout: 'Possibly', accepts_credit_cards: 'Yup', good_for: 'Maybe', parking: 'Yes', bike_parking: 'No', good_for_kids: 'Maybe', dogs_allowed: 'None', ambience: 'Yes', noise_level: 'None', outdoor_seating: 'Yes', has_tv: 'No', gender_neutral_restrooms: 'Yes' },
  { rid: 47, takes_reservations: 'Nope', takezout: 'None', accepts_credit_cards: 'None', accepts_apple_pay: 'None', good_for: 'Maybe', good_for_kids: 'You Wish', good_for_groups: 'Yes', dogs_allowed: 'No', ambience: 'Maybe', noise_level: 'Yes', alcohol: 'Maybe', outdoor_seating: 'Maybe', wifi: 'No' },
  { rid: 48, takes_reservations: 'No', accepts_credit_cards: 'Yes', accepts_apple_pay: 'Yup', good_for: 'Yes', bike_parking: 'No', good_for_kids: 'Maybe', good_for_groups: 'Yes', dogs_allowed: 'Yes', attire: 'No', ambience: 'Yup', noise_level: 'No', alcohol: 'Yup', outdoor_seating: 'Yes', has_tv: 'Possibly', caters: 'Yes', gender_neutral_restrooms: 'You Wish', smoking: 'No' },
  { rid: 49, takes_reservations: 'No', accepts_apple_pay: 'Yes', good_for: 'None', parking: 'You Wish', good_for_kids: 'No', good_for_groups: 'Yes', dogs_allowed: 'Yup', attire: 'Yup', ambience: 'Yes', alcohol: 'Possibly', gender_neutral_restrooms: 'Maybe' },
  { rid: 50, takezout: 'None', accepts_apple_pay: 'Yup', good_for: 'None', parking: 'Yes', bike_parking: '?', good_for_kids: 'No', ambience: 'Yes', noise_level: 'Yes', wifi: 'No', has_tv: 'None', smoking: 'Nope' },
  { rid: 51, takes_reservations: 'No', takezout: 'Yes', accepts_credit_cards: 'Maybe', good_for: 'Possibly', parking: 'Yes', bike_parking: 'Nope', wheelchair_accessible: 'Yes', dogs_allowed: 'Yes', ambience: '?', noise_level: 'Maybe', alcohol: 'No', outdoor_seating: 'Yes', wifi: 'None', has_tv: 'Yes', smoking: 'Maybe' },
  { rid: 52, takezout: 'Yup', accepts_credit_cards: 'No', accepts_apple_pay: 'No', good_for: 'Possibly', parking: 'Yes', bike_parking: 'No', wheelchair_accessible: 'None', dogs_allowed: 'No', ambience: 'Yup', noise_level: 'Yes', has_tv: 'None', caters: 'Yup' },
  { rid: 53, takes_reservations: 'Possibly', takezout: 'Yes', accepts_credit_cards: 'Yup', good_for: 'No', parking: 'Possibly', bike_parking: 'Nope', wheelchair_accessible: 'Yes', good_for_kids: 'Yes', good_for_groups: '?', noise_level: 'No', outdoor_seating: 'Possibly', has_tv: 'Yes', smoking: 'Yes' },
  { rid: 54, accepts_apple_pay: 'Maybe', good_for: 'Nope', parking: 'You Wish', wheelchair_accessible: 'Yes', good_for_kids: 'Yup', attire: 'None', ambience: 'None', noise_level: 'Yes', alcohol: 'Nope', outdoor_seating: 'Yes', has_tv: 'Yes', caters: 'No', gender_neutral_restrooms: 'Yup', smoking: 'Maybe' },
  { rid: 55, accepts_credit_cards: '?', good_for: 'None', bike_parking: '?', wheelchair_accessible: 'No', good_for_kids: 'Yes', good_for_groups: 'No', attire: 'No', ambience: 'No', noise_level: 'Maybe', alcohol: 'No', outdoor_seating: 'No' },
  { rid: 56, takes_reservations: 'Yes', parking: 'None', bike_parking: 'Yup', wheelchair_accessible: 'No', attire: 'No', noise_level: 'No', alcohol: 'No', outdoor_seating: 'None', wifi: 'No', has_tv: 'Possibly', caters: 'Maybe', gender_neutral_restrooms: 'Yup' },
  { rid: 57, takes_reservations: 'Yes', takezout: 'Yes', accepts_credit_cards: 'Yes', good_for: 'Yes', parking: 'Possibly', bike_parking: 'Yes', dogs_allowed: 'Maybe', attire: 'Possibly', outdoor_seating: 'Yes', wifi: 'You Wish', has_tv: 'No', caters: 'Yes', gender_neutral_restrooms: 'No', smoking: 'Yes' },
  { rid: 58, takes_reservations: 'Yup', accepts_credit_cards: 'Possibly', good_for: 'No', parking: 'None', good_for_groups: 'Yes', noise_level: 'No', alcohol: 'Yup', has_tv: 'Yes', gender_neutral_restrooms: 'You Wish' },
  { rid: 59, takes_reservations: 'Yes', takezout: 'Possibly', accepts_credit_cards: 'No', accepts_apple_pay: 'No', good_for: 'Yes', bike_parking: 'Yes', wheelchair_accessible: 'Nope', good_for_kids: 'None', good_for_groups: 'Yes', dogs_allowed: 'Yup', attire: 'No', has_tv: 'Maybe', caters: 'None', gender_neutral_restrooms: 'Possibly' },
  { rid: 60, takes_reservations: 'Nope', wheelchair_accessible: 'No', good_for_kids: 'Yup', dogs_allowed: 'Yes', ambience: 'Maybe', outdoor_seating: 'Nope', caters: '?' },
  { rid: 61, good_for: 'Yes', bike_parking: '?', good_for_kids: 'Yes', attire: 'None', ambience: 'Yes', alcohol: 'Yes', outdoor_seating: 'Yes', wifi: 'Yes', caters: 'Yes' },
  { rid: 62, parking: 'No', bike_parking: 'None', wheelchair_accessible: 'None', good_for_kids: 'You Wish', good_for_groups: 'You Wish', dogs_allowed: 'None', attire: 'No', ambience: 'Yup', noise_level: 'Nope', alcohol: 'Yes', wifi: 'Yes', has_tv: 'Possibly' },
  { rid: 63, takes_reservations: 'Nope', accepts_credit_cards: 'Yes', accepts_apple_pay: 'Nope', good_for: 'Yes', bike_parking: 'None', wheelchair_accessible: 'Maybe', good_for_kids: 'Maybe', good_for_groups: 'No', noise_level: 'You Wish', alcohol: 'You Wish', outdoor_seating: 'No', wifi: 'No', has_tv: 'Nope', caters: 'Yes', smoking: 'Yes' },
  { rid: 64, takes_reservations: 'Yes', takezout: 'No', accepts_credit_cards: 'None', accepts_apple_pay: '?', parking: 'Possibly', bike_parking: 'Yes', good_for_kids: 'Yes', good_for_groups: 'Yup', alcohol: 'Maybe', outdoor_seating: 'No', wifi: 'Possibly', smoking: 'No' },
  { rid: 65, takezout: 'Yup', accepts_credit_cards: 'Maybe', accepts_apple_pay: 'None', good_for: 'Nope', bike_parking: 'Possibly', wheelchair_accessible: 'No', good_for_kids: 'Nope', good_for_groups: 'You Wish', dogs_allowed: 'Maybe', ambience: 'Yes', noise_level: '?', alcohol: 'Yes', outdoor_seating: 'Yes', wifi: 'Yes', smoking: 'No' },
  { rid: 66, takes_reservations: 'No', takezout: 'None', accepts_credit_cards: 'Nope', parking: 'No', bike_parking: 'None', good_for_kids: 'None', dogs_allowed: 'No', attire: 'Yes', ambience: 'Yes', noise_level: 'Yes', alcohol: 'Yes', gender_neutral_restrooms: 'Yes' },
  { rid: 67, takezout: 'Yes', accepts_apple_pay: 'No', good_for: 'Maybe', wheelchair_accessible: 'No', good_for_kids: '?', good_for_groups: 'None', attire: 'Yes', noise_level: 'Maybe', alcohol: 'No', has_tv: 'No', caters: 'You Wish', gender_neutral_restrooms: 'You Wish', smoking: 'Yes' },
  { rid: 68, takes_reservations: 'Yes', takezout: 'Maybe', parking: 'No', bike_parking: 'None', good_for_kids: 'No', dogs_allowed: 'Possibly', attire: 'None', ambience: 'Yup', outdoor_seating: 'Yup', wifi: 'Yup', has_tv: 'Maybe', caters: 'Possibly', gender_neutral_restrooms: 'Yes', smoking: 'You Wish' },
  { rid: 69, takes_reservations: 'No', accepts_apple_pay: 'Yes', parking: 'Yes', bike_parking: 'No', good_for_groups: 'Possibly', dogs_allowed: 'Yes', attire: 'You Wish', ambience: 'Yes', noise_level: 'Yes', alcohol: 'Nope', outdoor_seating: 'Yes', caters: 'Yes', gender_neutral_restrooms: '?' },
  { rid: 70, takezout: '?', accepts_apple_pay: 'None', good_for: 'Maybe', parking: 'No', good_for_kids: 'You Wish', good_for_groups: 'No', dogs_allowed: 'You Wish', ambience: 'None', wifi: 'You Wish', has_tv: 'No', caters: 'Yes', smoking: 'No' },
  { rid: 71, takezout: 'No', good_for: 'No', bike_parking: 'Yes', good_for_groups: 'No', dogs_allowed: 'Yes', attire: 'No', noise_level: 'Yes', alcohol: 'Maybe', has_tv: 'Yes', caters: 'None', gender_neutral_restrooms: 'Maybe', smoking: 'Maybe' },
  { rid: 72, takes_reservations: 'Yes', takezout: 'Yup', good_for: 'No', parking: 'Yup', bike_parking: 'Yes', good_for_groups: 'None', dogs_allowed: 'You Wish', ambience: 'No', noise_level: 'No', alcohol: 'Possibly', wifi: 'None', has_tv: 'No', caters: 'Yes', gender_neutral_restrooms: 'Maybe' },
  { rid: 73, takes_reservations: 'Yes', accepts_credit_cards: 'Yes', accepts_apple_pay: 'Yup', good_for: 'None', parking: 'None', bike_parking: 'Yes', wheelchair_accessible: 'Maybe', good_for_kids: 'Yes', attire: 'Yes', ambience: 'No', noise_level: 'Maybe', smoking: 'Yes' },
  { rid: 74, takezout: 'Yes', accepts_credit_cards: 'Yes', accepts_apple_pay: 'Yup', parking: 'None', bike_parking: 'No', ambience: 'None', wifi: 'Yes', caters: 'Maybe' },
  { rid: 75, takezout: 'Yes', accepts_credit_cards: 'Nope', good_for: 'Maybe', parking: 'None', bike_parking: 'Possibly', good_for_kids: 'None', good_for_groups: 'Maybe', dogs_allowed: 'No', attire: 'No', ambience: 'Maybe', outdoor_seating: '?', wifi: 'Yup', has_tv: 'Yes' },
  { rid: 76, takezout: 'Yes', accepts_credit_cards: 'Yes', accepts_apple_pay: 'You Wish', good_for: 'Nope', parking: 'None', bike_parking: 'Possibly', good_for_kids: 'No', good_for_groups: 'Yup', dogs_allowed: 'Possibly', attire: 'Yes', ambience: 'Possibly', outdoor_seating: '?', gender_neutral_restrooms: 'Yes', smoking: 'Yes' },
  { rid: 77, takes_reservations: '?', takezout: 'Yes', accepts_credit_cards: 'Yes', good_for: 'Nope', bike_parking: 'Yes', wheelchair_accessible: 'Yes', good_for_kids: 'Nope', attire: 'Yes', ambience: 'No', has_tv: 'Yup', caters: 'Nope', gender_neutral_restrooms: 'You Wish', smoking: 'No' },
  { rid: 78, takes_reservations: 'Yes', takezout: 'You Wish', parking: 'You Wish', wheelchair_accessible: 'Possibly', dogs_allowed: 'Yes', attire: '?', outdoor_seating: 'Maybe', wifi: 'You Wish', has_tv: 'None', caters: 'Maybe', gender_neutral_restrooms: 'Maybe', smoking: 'Maybe' },
  { rid: 79, bike_parking: 'Yes', attire: 'Yup', ambience: 'Yes', noise_level: 'You Wish', alcohol: 'None', outdoor_seating: 'Yes', wifi: 'Maybe', caters: 'Yes', gender_neutral_restrooms: 'You Wish', smoking: 'You Wish' },
  { rid: 80, takes_reservations: 'Yes', takezout: 'Yes', accepts_credit_cards: 'Maybe', good_for: 'None', parking: 'Yes', good_for_kids: 'No', good_for_groups: 'Yes', dogs_allowed: 'Maybe', ambience: 'Maybe', noise_level: 'Yes', alcohol: 'Maybe', wifi: 'Maybe', has_tv: 'No', gender_neutral_restrooms: 'Yes', smoking: 'Yes' },
  { rid: 81, takes_reservations: 'No', takezout: 'Yes', accepts_apple_pay: '?', parking: 'No', bike_parking: 'Nope', wheelchair_accessible: 'No', good_for_groups: 'Maybe', ambience: 'No', noise_level: 'Yup', wifi: 'None', caters: 'Nope', gender_neutral_restrooms: 'Maybe' },
  { rid: 82, takes_reservations: 'Nope', takezout: 'Possibly', accepts_credit_cards: 'None', good_for: 'None', good_for_kids: 'Maybe', dogs_allowed: 'Yes', noise_level: 'Possibly', alcohol: 'No', outdoor_seating: 'None', wifi: 'No', has_tv: 'Yup', caters: '?', gender_neutral_restrooms: 'None', smoking: 'Nope' },
  { rid: 83, takes_reservations: 'No', takezout: 'Maybe', accepts_credit_cards: 'Yes', accepts_apple_pay: 'Possibly', bike_parking: 'No', wheelchair_accessible: 'Yes', good_for_kids: 'Yup', dogs_allowed: 'Yes', attire: 'Yup', ambience: 'None', noise_level: 'None', wifi: 'Yup', caters: 'No', gender_neutral_restrooms: 'Nope' },
  { rid: 84, accepts_credit_cards: 'None', accepts_apple_pay: 'Nope', parking: 'Maybe', wheelchair_accessible: 'Possibly', good_for_kids: 'No', good_for_groups: 'None', dogs_allowed: 'Yes', ambience: 'Possibly', noise_level: 'Yes', outdoor_seating: 'Yes', wifi: 'Yes', has_tv: 'None' },
  { rid: 85, good_for: 'No', parking: 'Maybe', bike_parking: 'Yes', good_for_kids: 'Yes', dogs_allowed: 'No', attire: 'Nope', ambience: 'No', alcohol: 'None', outdoor_seating: 'Yes', has_tv: 'Yes', caters: 'Possibly' },
  { rid: 86, takes_reservations: 'No', accepts_apple_pay: 'Yes', good_for: 'None', bike_parking: 'Yup', wheelchair_accessible: 'Yes', good_for_kids: 'Yes', dogs_allowed: 'Yes', ambience: 'Yup', outdoor_seating: 'Yes', has_tv: 'Maybe', caters: 'Maybe', gender_neutral_restrooms: 'Possibly', smoking: 'Yes' },
  { rid: 87, takezout: 'No', accepts_apple_pay: 'Yes', parking: 'Yes', bike_parking: 'Maybe', wheelchair_accessible: 'Yes', good_for_kids: 'Yes', good_for_groups: 'No', attire: 'Yes', ambience: 'Possibly', noise_level: 'None', wifi: 'Nope', gender_neutral_restrooms: 'Yes', smoking: '?' },
  { rid: 88, takes_reservations: 'No', accepts_apple_pay: 'Possibly', wheelchair_accessible: 'Yup', good_for_groups: 'Nope', dogs_allowed: 'You Wish', attire: 'Yes', ambience: 'No', noise_level: '?', alcohol: 'Maybe', outdoor_seating: 'Yes' },
  { rid: 89, takes_reservations: 'Possibly', takezout: '?', accepts_credit_cards: 'Possibly', accepts_apple_pay: 'Possibly', parking: '?', bike_parking: 'No', attire: 'None', ambience: 'Yes', noise_level: 'Yes', has_tv: 'No' },
  { rid: 90, takes_reservations: 'None', accepts_credit_cards: 'Maybe', accepts_apple_pay: 'Yes', parking: 'Yes', bike_parking: 'Yes', good_for_kids: 'Nope', attire: 'No', ambience: 'No', noise_level: 'Possibly', alcohol: 'Nope', outdoor_seating: 'None', wifi: 'Yes', has_tv: 'Nope' },
  { rid: 91, takes_reservations: 'No', accepts_credit_cards: 'Yup', accepts_apple_pay: 'Yes', good_for: 'Maybe', parking: 'No', bike_parking: 'Nope', wheelchair_accessible: 'Yup', good_for_groups: 'Nope', attire: 'Yes', alcohol: 'Yes', outdoor_seating: 'Nope', wifi: 'Maybe', caters: 'Nope' },
  { rid: 92, takezout: 'No', accepts_credit_cards: 'None', accepts_apple_pay: 'No', bike_parking: 'Maybe', good_for_groups: 'Maybe', dogs_allowed: 'Yup', alcohol: 'None', outdoor_seating: 'Yes', has_tv: 'Yes', gender_neutral_restrooms: 'Possibly' },
  { rid: 93, accepts_credit_cards: 'No', accepts_apple_pay: 'Maybe', good_for: 'Nope', parking: 'Yup', wheelchair_accessible: 'None', good_for_kids: 'Yes', good_for_groups: 'Yes', dogs_allowed: 'Maybe', attire: 'Yes', ambience: 'Yes', noise_level: 'No', wifi: 'Nope', has_tv: 'Yes', caters: 'None', gender_neutral_restrooms: 'No', smoking: 'You Wish' },
  { rid: 94, accepts_apple_pay: 'Possibly', good_for: 'Yup', good_for_groups: 'None', dogs_allowed: 'Yup', attire: 'Possibly', ambience: 'Maybe', noise_level: 'No', has_tv: 'Possibly', caters: 'No', gender_neutral_restrooms: 'Yes', smoking: '?' },
  { rid: 95, takes_reservations: 'Yes', takezout: 'No', accepts_credit_cards: 'Yup', parking: 'Yes', bike_parking: 'Yes', good_for_kids: 'Yup', good_for_groups: 'Nope', noise_level: 'Nope', alcohol: 'Yes', outdoor_seating: 'Yup', wifi: 'No', has_tv: 'Yes', gender_neutral_restrooms: 'Yup', smoking: 'Maybe' },
  { rid: 96, takezout: 'Yes', accepts_apple_pay: '?', good_for: 'None', parking: 'Possibly', bike_parking: 'You Wish', wheelchair_accessible: 'Yup', good_for_kids: 'No', dogs_allowed: 'None', attire: 'None', ambience: 'None', noise_level: 'You Wish', alcohol: 'You Wish', outdoor_seating: 'Yes', has_tv: 'Yes', gender_neutral_restrooms: 'Nope', smoking: 'Maybe' },
  { rid: 97, takes_reservations: 'No', accepts_apple_pay: 'Yup', wheelchair_accessible: 'Nope', good_for_kids: 'No', attire: 'No', ambience: 'Maybe', has_tv: 'Yes', caters: 'Yes' },
  { rid: 98, takes_reservations: 'Yes', takezout: 'No', accepts_credit_cards: 'Maybe', accepts_apple_pay: 'Nope', good_for: 'No', parking: '?', bike_parking: 'Maybe', wheelchair_accessible: 'Yup', good_for_kids: 'None', attire: 'No', ambience: 'No', wifi: 'Yes', has_tv: 'No', gender_neutral_restrooms: 'Maybe', smoking: 'Yup' },
  { rid: 99, takes_reservations: 'Yup', takezout: 'Yes', accepts_credit_cards: 'Nope', accepts_apple_pay: 'Nope', good_for: 'Nope', parking: 'Maybe', bike_parking: 'Yes', wheelchair_accessible: 'None', good_for_groups: 'No', dogs_allowed: 'Yup', ambience: 'No', noise_level: 'Yes', alcohol: 'No', outdoor_seating: 'Yes', has_tv: 'You Wish', caters: 'Maybe', gender_neutral_restrooms: 'Yup', smoking: 'Yes' },
  { rid: 100, takes_reservations: 'No', accepts_apple_pay: 'None', good_for: 'Yes', parking: 'None', bike_parking: 'No', good_for_kids: 'Yes', good_for_groups: 'Maybe', dogs_allowed: 'Yes', attire: 'No', outdoor_seating: 'Yes', gender_neutral_restrooms: 'None', smoking: 'No'}
]

module.exports = {
  restaurantData,
  hoursData,
  detailsData,
  miscData
};





// const restGen = (rid=0, results=[]) => {

//   const adjOrNo = Math.floor(Math.random() * 2);

//   const random = (arr) => {
//     return arr[Math.floor(Math.random() * arr.length)];
//   }

//   const starter = ['Lord Voldemort\'s', 'The', 'Deathly', 'Death Eater\'s', 'Tom\'s', 'Riddle\'s', 'Tom Riddle\'s', 'Slytherin', 'Dementor\'s', 'Dark Wizard\'s']

//   const adj = [' Unforgiveable', ' Deadly', ' Deathly', ' Dark']

//   const middle = [' Horcrux ', ' Dark Mark ', ' Elder Wand ', ' Imperius Curse ', ' Killing Curse ', ' Cruciatus Curse ', ' Prophecy ', ' Philosopher\'s Stone ', ' Curse ']

//   const closer = ['of the Dark Arts', 'of Azkaban', 'of Revenge', 'of the Pure Blood', 'that Shall not be Named', 'of the Dark Lord']

//   const name = random(starter) + random(adj) + random(middle) + random(closer);

//   const rest = { name }

//   if (rid < 100) {
//     results.push(rest)
//     rid += 1
//     restGen(rid, results)
//   }
//   return results;
// }




// const hoursGen = (rid=0, results=[]) => {

//   const hours = { rid }
//   const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
//   if (rid < 101) {
//     days.map(day => {

//       const timesNum = Math.floor(Math.random() * 2);
//       let hours1 = Math.floor(Math.random() * 8 + 5);
//       let hours2 = (num) => {
//         return num === 0 ? Math.floor(Math.random() * 6 + 7) : Math.floor   (Math.random() * 6)
//       }
//       hours2 = hours2(timesNum);
//       if (hours2 === 0) hours2 = 12;

//       let mins1 = (hour1, hour2) => {
//         return hour1 === hour2 ? Math.floor(Math.random() * 59) : Math.floor    (Math.random() * 60)
//       }
//       mins1 = mins1(hours1, (hours2 + 12));

//       let mins2 = (hour1, hour2, min) => {
//         return hour1 === hour2 && Math.floor(Math.random() * 60) < min ? mins +     (Math.floor(Math.random() * (60 - mins))) : Math.floor(Math.random()  * 60)  ;
//       }

//       mins2 = mins2(hours1, (hours2 + 12), mins1)

//       if (mins2 < 10) {
//         mins2 = '0' + mins2;
//       }

//       if (mins1 < 10) mins1 = '0' + mins1;
//       if (hours1 === 12) {
//         hours1 = hours1.toString() + ':' + mins1 + ' pm - ';
//       } else {
//         hours1 = hours1.toString() + ':' + mins1 + ' am - ';
//       }


//       let hours3 = Math.floor(Math.random() * 5 + 4)
//       let hours4 = (hour) => {
//         return Math.floor(Math.random() * 6 + 7) < hour ? hour + Math.floor   (Math.random() * (12 - hour)) : Math.floor(Math.random() * 6 + 7)
//       }
//       hours4 = hours4(hours3);

//       let mins3 = (hour3, hour4) => {
//         return hour3 === hour4 ? Math.floor(Math.random() * 59) : Math.floor    (Math.random() * 60);
//       }

//       mins3 = mins3(hours3, hours4);

//       let mins4 = (hour3, hour4, min) => {
//         return hour3 === hour4 && Math.floor(Math.random() * 60) < min ? min +    Math.floor(Math.random() * (60 - min)) : Math.floor(Math.random() * 60);
//       }

//       mins4 = mins4(hours3, hours4, mins3);

//       if (mins3 < 10) mins3 = '0' + mins3;
//       if (mins4 < 10) mins4 = '0' + mins4;

//       let time1 = hours1 + hours2 + ':' + mins2 + ' pm';
//       if (timesNum === 0 && hours2 === 12) time1 = time1.slice(0, -2) + 'am'
//       let time2 = hours3.toString() + ':' + mins3 + ' pm - ' + hours4 + ':' +     mins4 + ' pm';
//       if (hours4 > 11) time2 = time2.slice(0,-2) + 'am';
//       if (timesNum === 1) {
//         time1 = time1 + '\n' + time2;
//       }
//      hours[day] = time1
//     })
//     results.push(hours);
//     rid += 1
//     hoursGen(rid, results)
//   }
//   return results
// }






// const detailsGen = (rid=0, results=[]) => {
//   const price = () => {
//     return Math.floor(Math.random() * 60)
//   }
//   const randomI = (detail) => {
//     return Math.floor(Math.random() * detail.length);
//   }

//   const today = ''
//   const price1 = price()
//   const price2 = Math.floor(price1 * (Math.random() + 1))
//   const price_range = '$' + price1 + '-' + price2
//   const health = ['A', 'B', 'C', 'D', 'E', 'F']

//   const details = {rid, today, price_range, health_score: health[randomI(health)]}



//   if (rid < 101) {
//     results.push(details)
//     rid += 1
//     detailsGen(rid, results)
//   }

//   return results;
// }




// const miscGen = (rid = 0, results = []) => {
//   const include = () => {
//     return Math.floor(Math.random() * 5)
//   }

//   const random = (choices) => {
//     return Math.floor(Math.random() * choices.length)
//   }

//   const genAns = ['Yes', 'No', 'Yup', 'Nope', 'Yes', 'No', 'Maybe', 'Yes', 'Maybe', 'No', 'Possibly', 'No', 'Possibly', 'Maybe', 'Yes', 'You Wish', 'Yup', 'Nope', 'Yes', 'No', '?', 'Yes', 'None', 'Yes', 'Yes', 'None', 'None' ];


//   const data = ['takes_reservations', 'takezout', 'accepts_credit_cards', 'accepts_apple_pay', 'good_for', 'parking', 'bike_parking', 'wheelchair_accessible', 'good_for_kids', 'good_for_groups', 'dogs_allowed', 'attire', 'ambience', 'noise_level', 'alcohol', 'outdoor_seating', 'wifi', 'has_tv', 'caters', 'gender_neutral_restrooms','smoking']

//   const misc = {rid}

//   data.map(item => {
//     if (include() < 3 ) {
//       misc[item] = genAns[random(genAns)]
//     }
//   })

//   if (rid < 101) {
//     results.push(misc)
//     rid += 1
//     miscGen(rid, results)
//   }

//   return results
// }
