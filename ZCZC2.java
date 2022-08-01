不明内容 ACUN BQEO{ 
上汽大通
//line 2
}

[ACUN EBPJ]*"前雾灯输入值",                  {22 e0 0b},21,d4,00-01,按下|02-03;//line 1060
[ACUN EBPJ]*"SK2锁定状态",                   {22 d3 03},21,d80,锁定,解锁|;//line 1115
[ACUN EBPJ]*"SK2写入状态",                   {22 d3 03},21,d40,是,无|;//line 1116

[ACUN EBPJ]*"换挡杆驾驶模式反馈",            {22 d0 02},3f,d4,'00-01:未准备好(正在变更档位)','02-03:停车档','oth:---'02-0302-03;//line 1519


<ZJZJ LJEY ZD VODY DK ACUN BQEO>



















//2[通过拉力传感器值控制拉起](Spec)//line 1623









$$$//line 1638

//2[通过占空比调节拉起](Spec)//line 1640









$$$//line 1655

//2[通过位移传感器调节拉起](Spec)//line 1657









$$$//line 1672

//2[通过占空比调节常规停止](Spec)//line 1674









$$$//line 1689

//2[维修位置](Spec)//line 1691


















$$$//line 1719

//2[通过拉力传感器值控制释放](Spec)//line 1721









$$$//line 1736

//2[通过占空比调节释放](Spec)//line 1738









$$$//line 1753

//2[通过位移传感器调节释放](Spec)//line 1755









$$$//line 1770

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

[ACUN EBPJ]*"极柱火警",    {01 00 02 18 05 F3 01 1f ff ff ff 01},3f,(d7&0x30)>>4,'01:过低','02:过高','03:火警','oth:正常';//line 2661
[ACUN EBPJ]*"极柱火警",    {01 00 02 18 05 F3 02 1f ff ff ff 01},3f,(d7&0x30)>>4,'01:过低','02:过高','03:火警','oth:正常';//line 2791
[ACUN EBPJ]*"极柱火警",    {01 00 02 18 05 F3 03 1f ff ff ff 01},3f,(d7&0x30)>>4,'01:过低','02:过高','03:火警','oth:正常';//line 2919
[ACUN EBPJ]*"极柱火警",    {01 00 02 18 05 F3 04 1f ff ff ff 01},3f,(d7&0x30)>>4,'01:过低','02:过高','03:火警','oth:正常';//line 3048


<ZJZJ LJEY ZD VODY DK ACUN BQEO>



$Str(ByCheckBmsCell);//line 3277
*"温度",      {00 00 02 03 29 7f ff 05},cf,d2-40,.0,℃;//line 3278
*"温度",      {00 00 02 03 29 7f ff 05},cf,d3-40,.0,℃;//line 3279
*"温度",      {00 00 02 03 29 7f ff 05},cf,d4-40,.0,℃;//line 3280
*"温度",      {00 00 02 03 29 7f ff 05},cf,d5-40,.0,℃;//line 3281
*"温度",      {00 00 02 03 29 7f ff 05},cf,d6-40,.0,℃;//line 3282
*"温度",      {00 00 02 03 29 7f ff 05},cf,d7-40,.0,℃;//line 3283
*"温度",      {00 00 02 03 29 7f ff 05},cf,d8-40,.0,℃;//line 3284
*"温度",      {00 00 02 03 29 7f ff 05},cf,d10-40,.0,℃;//line 3285
*"温度",      {00 00 02 03 29 7f ff 05},cf,d11-40,.0,℃;//line 3286
*"温度",      {00 00 02 03 29 7f ff 05},cf,d12-40,.0,℃;//line 3287
*"温度",      {00 00 02 03 29 7f ff 05},cf,d13-40,.0,℃;//line 3288
*"温度",      {00 00 02 03 29 7f ff 05},cf,d14-40,.0,℃;//line 3289
*"温度",      {00 00 02 03 29 7f ff 05},cf,d15-40,.0,℃;//line 3290
*"温度",      {00 00 02 03 29 7f ff 05},cf,d16-40,.0,℃;//line 3291
*"温度",      {00 00 02 03 29 7f ff 05},cf,d18-40,.0,℃;//line 3292
*"温度",      {00 00 02 03 29 7f ff 05},cf,d19-40,.0,℃;//line 3293
*"温度",      {00 00 02 03 29 7f ff 05},cf,d20-40,.0,℃;//line 3294
*"温度",      {00 00 02 03 29 7f ff 05},cf,d21-40,.0,℃;//line 3295
*"温度",      {00 00 02 03 29 7f ff 05},cf,d22-40,.0,℃;//line 3296
*"温度",      {00 00 02 03 29 7f ff 05},cf,d23-40,.0,℃;//line 3297
*"温度",      {00 00 02 03 29 7f ff 05},cf,d24-40,.0,℃;//line 3298
*"温度",      {00 00 02 03 29 7f ff 05},cf,d26-40,.0,℃;//line 3299
*"温度",      {00 00 02 03 29 7f ff 05},cf,d27-40,.0,℃;//line 3300
*"温度",      {00 00 02 03 29 7f ff 05},cf,d28-40,.0,℃;//line 3301
*"温度",      {00 00 02 03 29 7f ff 05},cf,d29-40,.0,℃;//line 3302
*"温度",      {00 00 02 03 29 7f ff 05},cf,d30-40,.0,℃;//line 3303
*"温度",      {00 00 02 03 29 7f ff 05},cf,d31-40,.0,℃;//line 3304
*"温度",      {00 00 02 03 29 7f ff 05},cf,d32-40,.0,℃;//line 3305
*"温度",      {00 00 02 03 29 7f ff 05},cf,d34-40,.0,℃;//line 3306
*"温度",      {00 00 02 03 29 7f ff 05},cf,d35-40,.0,℃;//line 3307
*"温度",      {00 00 02 03 29 7f ff 05},cf,d36-40,.0,℃;//line 3308
*"温度",      {00 00 02 03 29 7f ff 05},cf,d37-40,.0,℃;//line 3309

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S025_null()//line 3311
$Init();//line 3312
$$$//line 3313
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S026_null()                                //line 3314
$Init();                                    //line 3315
$$$                                         //line 3316
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S027_null()                                //line 3317
$Init();                                    //line 3318
$$$                                         //line 3319
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S028_null()                                //line 3320
$Init();                                    //line 3321
$$$                                         //line 3322
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S029_null()                                //line 3323
$Init();//line 3324
$$$//line 3325
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S030_null()//line 3326
$Init();//line 3327
$$$//line 3328
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S031_null()//line 3329
$Init();//line 3330
$$$//line 3331
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S032_null()//line 3332
$Init();//line 3333
$$$//line 3334
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S033_null()//line 3335
$Init();//line 3336
$$$//line 3337
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S034_null()//line 3338
$Init();//line 3339
$$$//line 3340
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S035_null()//line 3341
$Init();//line 3342
$$$//line 3343
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S036_null()//line 3344
$Init();//line 3345
$$$//line 3346
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S037_null()//line 3347
$Init();//line 3348
$$$//line 3349
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S038_null()//line 3350
$Init();//line 3351
$$$//line 3352
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S039_null()//line 3353
$Init();//line 3354
$$$//line 3355
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S040_null()//line 3356
$Init();//line 3357
$$$//line 3358
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S041_null()//line 3359
$Init();//line 3360
$$$//line 3361
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S042_null()//line 3362
$Init();//line 3363
$$$//line 3364
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S043_null()//line 3365
$Init();//line 3366
$$$//line 3367
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S044_null()//line 3368
$Init();//line 3369
$$$//line 3370
</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S045_null()//line 3371
$Init();//line 3372
$$$//line 3373

</RA ZJZO AB LJEY NINI>

[UYTZ BRTZ MSOX]d4*<--*"碰撞信号",            {22 e0 0c},cf,d4*,.0,;//line 3885
[ACUN EBPJ]*"钥匙数量",            {22 d3 01},3f,d4,'00:0','01:1','02:2','03:3','04:4','05:5','06:6','07:7','08:8','09:9','10:10','11:11','12:12','13:13','14:14','15:oth','--:10','oth:---';//line 3959

[UYTZ BRTZ MSOX]d4*<--*"硬线-PWM(脉宽调制)碰撞信号",{22 e0 03},cf,d4*,.0,;//line 5062

[ACUN EBPJ]*"车辆模式配置",                  {22 c0 01},3f,d4,'01:工厂模式','02:运输模式','03:正常模式','oth:---',4;//line 5787

<RA ZJZO AB LJEY NINI>

_S078_null()//line 6476
$Init();//line 6477
$$$//line 6478

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S079_null()//line 6480
$Init();//line 6481
$$$//line 6482

</RA ZJZO AB LJEY NINI>

[ACUN EBPJ]*"TCU(变速箱控制单元)",         {22 c1 01},21,d4,01,AT(CVT,DCT)|手动变速箱;//line 6627

[ACUN EBPJ]*"车辆车型",                                 {22 c1 01},3f,d5,'00:0','01:1','02:2','03:3','04:4','05:5','06:6','07:7','08:8','09:9','0a:10','0b:11','0c:12','0d:13','0e:14','0f:15','oth:预留',10;//line 6946
[ACUN EBPJ]*"当前IMMO学习的钥匙数量",                   {22 d3 10},3f,d4,'00:0','01:1','02:2','03:3','04:4','05:5','06:6','07:7','08:8','09:9','0a:10','0b:11','0c:12','0d:13','0e:14','0f:15','oth:预留',10;//line 7019

[ACUN EBPJ]*"供应商电控单元硬件参考号2"      {22 f1 92},0a,d4-d13;//line 7966

[ACUN EBPJ]*"后视镜类型",                    {22 c0 20},3f,d6,'00:电动折叠带加热外后视镜','01:外后视镜电加热','02:电动外后视镜','03:电动折叠带加热外后视镜带照地灯','oth:--',;//line 8245

[ACUN EBPJ]*"空调类型配置",                  {22 c0 01},3f,d7,'00:未配置','01:手动空调','02:自动空调','oth:预留'040;//line 8393
[ACUN EBPJ]*"后视镜",                        {22 c0 20},3f,d6,'00:无锁车自动折叠','01:锁车自动折叠','oth:预留',;//line 8435
[ACUN EBPJ]*"后视镜下倾",                    {22 c0 20},3f,d7,'00:无锁车自动下倾','01:锁车自动下倾','oth:预留',;//line 8436
[ACUN EBPJ]*"顶棚区域",                      {22 c0 26},3f,d6,'00:区域不可选','01:区域可选','oth:预留',;//line 8458
[ACUN EBPJ]*"车门",                          {22 c0 0f},3f,d4,'00:两门','01:四门','oth:预留',;//line 8531
[ACUN EBPJ]*"超速报警",                      {22 c0 0f},3f,d5,'00:已配置','01:未配置','oth:预留',;//line 8532

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9311


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$//line 9443

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9470

<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$//line 9485

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9551

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9592

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9633
[ACUN EBPJ]*"ECU安装日期",                   {22 f1 9d},bb,"20"d4h".",d5h".",d6h;//line 9634
[ACUN EBPJ]*"编程日期",                      {22 f1 99},bb,"20"d4h".",d5h".",d6h;//line 9635

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9755

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9835

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 9917

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10045

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10377

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10659

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10700

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10741
[ACUN EBPJ]*"ECU安装日期",                   {22 f1 9d},bb,"20"d4h".",d5h".",d6h;//line 10742
[ACUN EBPJ]*"编程日期",                      {22 f1 99},bb,"20"d4h".",d5h".",d6h;//line 10743

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10863

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10946

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 10985

[ACUN EBPJ]*"系统供应商识别号",              {22 f1 8a},bb,d4a,d5-d9h;;//line 11063
[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11066

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11194

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11239

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11274

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11309

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11473

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11751

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11868

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 11985

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 12026

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 12067
[ACUN EBPJ]*"ECU安装日期",                   {22 f1 9d},bb,"20"d4h".",d5h".",d6h;//line 12068
[ACUN EBPJ]*"编程日期",                      {22 f1 99},bb,"20"d4h".",d5h".",d6h;//line 12069

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 12189

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 12269

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 12351

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 12479

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 12811

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h,".",d5h,".",d6h;//line 12969

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h,".",d5h,".",d6h;//line 13089

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20"d4h".",d5h".",d6h;//line 13175

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 13549

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 13584

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 13619


[cf BRTZ MSOX]*"里程读数(上次)",                {22 f1 10},cf,d15d16d17,.0;//line 13775
[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 13784

[ACUN EBPJ]*"供应商ECU序列号",               {22 f1 8c},16,d4-d13,;//line 13897

[ACUN EBPJ]*"供应商ECU序列号",               {22 f1 8c},16,d4-d13,;//line 13935

[ACUN EBPJ]*"供应商ECU硬件参考号",           {22 f1 92},0a,d4-d13;;//line 13975

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14227

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14268

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14516

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14636

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14676

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14757

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14879


[cf BRTZ MSOX]*"里程读数(上次)",                {22 f1 10},cf,d15d16d17,.0;//line 14910
[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14919

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 14962

[ACUN EBPJ]*"年/月/日",                      {22 f1 8c}16,d11-d13;//line 14999

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 15199

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 15441

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 15485

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 15650

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 15770

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 15815


[cf BRTZ MSOX]*"刹车踏板实际位置",              {22 e0 23},cf,d4*1.0,%;//line 16091
[cf BRTZ MSOX]*"高压电池包长时放电功率",        {22 e0 21},cf,d4*1.0,千瓦;//line 16103
[cf BRTZ MSOX]*"高压电池包瞬时放电功率",        {22 e0 22},cf,d4*1.0,千瓦;//line 16104

[ACUN EBPJ]*"ECU制造日期",                   {22 f1 8b},bb,"20",d4h,".",d5h".",d6h;//line 16238

[ACUN EBPJ]*"前排乘客安全气囊禁用开关状态",  {22 b0 01},3f,d5,'00-0f:占用','10-1f:未占用','20-2f:错误','30-3f:无信号/未配置','oth:预留'//line 16854
[ACUN EBPJ]*"前排乘客安全带插锁(占位传感器)状态",{22 b0 01},3f,d6,'00-0f:安全带系上/没人','10-1f:已解开(已松开)/已占用&&已松开','30-3f:无信号/未配置','oth:预留'//line 16856


[cf BRTZ MSOX]*"车速",                          {22 e1 02},cf,d4*1,km/h;//line 17065
[ACUN EBPJ]*"发动机防盗指示灯",              {22 d1 1c},3f,d5,'00:关闭','01:闪烁(2Hz)','02:闪烁(0.33Hz)','03:打开'04;//line 17040

[ACUN EBPJ]*"车速状态",                      {22 e0 17},3f,d6,'00:有效','01:无效','0th:-';//line 17930

[ACUN EBPJ]*"年/月/日",                      {22 f1 8c},bb,d12a,"/",d13a"/",d14-d15a;//line 18598
[ACUN EBPJ]*"氛围灯颜色",                    {22 c0 25},3f,d7,'00:无氛围灯','单色-红色','02:单色-蓝色','03:多色-7色','04:多色-16色','05:多色-32色','06:多色-64(静态)','07:多色-64色律动氛围灯(基础静态和动态功能)','oth:-';//line 18699
[ACUN EBPJ]*"后排乘客区车窗玻璃升降类型",    {22 c0 03},3f,d4,,'00-0f:一键升降(带防夹)','10-1f:后排乘客区电动玻璃一键自动下','20-2f:后排乘客区电动玻璃','oth:预留'40;//line 18700
[ACUN EBPJ]*"远程信息处理系统类型配置",      {22 c0 03},3f,d5,'00:远程控制系统(TBOX)高配和斑马平台','01:远程控制系统(TBOX)高配和大通平台','02:远程控制系统(TBOX)低配和斑马平台','03:远程控制系统(TBOX)低配和大通平台','04:远程控制系统(TBOX)和上汽集团后方车辆监控系统(RVM)','05:远程控制系统(TBOX)和斑马后方车辆监控系统','06:远程控制系统(TBOX)和大通后方车辆监控系统','07:无远程控制系统','oth:-'//line 18703


[cf BRTZ MSOX]*"里程读数(上次)",                {22 f1 10},cf,d15d16d17,.0;//line 18780

[ACUN EBPJ]*"系统状态",                      {22 e0 04},3f,d4,'00:LDC关闭','01:LDC开启','02:LDC故障','oth:预留'//line 19015


[cf BRTZ MSOX]*"防盗PIN码",                    {22 cf 10},cf,d4*4278190080/255+d5*16711680/255+d6*65280+d7*1,.0;                   //line 19816


<ZJZJ LJEY ZD VODY DK ACUN BQEO>





$Init();//line 20322
CAN,11,500K,pin:1+9,f080/f180/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 20323
in{10 01}/{22 f1 91},//line 20324
link{3e 00}1,3000ms,//line 20325
exit{null},//line 20326


</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>



























$Init();//GW//line 21466
CAN,11,500K,pin:6+14,e200/e300/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21467
in{10 03},//line 21468
link{3e 00}1,3000ms,//line 21469
exit{null},//line 21470






















$Init();//BMS//line 21493
CAN,11,500K,pin:6+14,f020/f120/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21494
in{10 01},//line 21495
link{3e 00}1,3000ms,//line 21496
exit{null},//line 21497































$Init();//TC//line 21529
CAN,11,500K,pin:6+14,f040/f140/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21530
in{10 01},//line 21531
link{3e 00}1,3000ms,//line 21532
exit{null},//line 21533































$Init();//DCDC//line 21565
CAN,11,500K,pin:6+14,f0a0/f1a0/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21566
in{10 01},//line 21567
link{3e 00}1,3000ms,//line 21568
exit{null},//line 21569






























$Init();//VCU//line 21600
CAN,11,500K,pin:6+14,fc60/fd60/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21601
in{10 01},//line 21602
link{3e 00}1,3000ms,//line 21603
exit{null},//line 21604






























$Init();//SCU//line 21635
CAN,11,500K,pin:6+14,ee20/ef20/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21636
in{10 01},//line 21637
link{3e 00}1,3000ms,//line 21638
exit{null},//line 21639
















$Init();//SDM//line 21656
CAN,11,500K,pin:6+14,e600/e700/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21657
in{10 03},//line 21658
link{3e 00}1,3000ms,//line 21659
exit{null},//line 21660






















$Init();//SAC//line 21683
CAN,11,500K,pin:6+14,eee0/efe0/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21684
in{10 03},//line 21685
link{3e 00}1,3000ms,//line 21686
exit{null},//line 21687



$Init();//ISC//line 21691
CAN,11,500K,pin:6+14,f060/f160/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21692
in{10 03},//line 21693
link{3e 00}1,3000ms,//line 21694
exit{null},//line 21695































$Init();//BMS//line 21727
CAN,11,500K,pin:6+14,f020/f120/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21728
in{10 01}/{10 03},//line 21729
link{3e 00}1,3000ms,//line 21730
exit{null},//line 21731



$Init();//GW//line 21735
CAN,11,500K,pin:6+14,E200/E300/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21736
in{10 01}/{10 03}faultSend("e200/e300/ffe0",1,7),//line 21737
link{3e 00}1,3000ms,//line 21738
exit{null},//line 21739

$Init();//GSMC//line 21741
CAN,11,500K,pin:1+9,f0c0/f1c0/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21742
in{10 03},//line 21743
link{3e 00}1,3000ms,//line 21744
exit{null},//line 21745















$Init();//obc//line 21761
CAN,11,500K,pin:1+9,f080/f180/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21762
in{10 01},//line 21763
link{3e 00}1,3000ms,//line 21764
exit{null},//line 21765
































$Init();//GW//line 21798
CAN,11,500K,pin:6+14,E200/E300/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21799
in{10 01}/{10 03}faultSend("e200/e300/ffe0",1,7),//line 21800
link{3e 00}1,3000ms,//line 21801
exit{null},//line 21802

$Init();//ABS//line 21804
CAN,11,500K,pin:6+14,e400/e500/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 21805
in{10 01},//line 21806
link{3e 00}1,3000ms,//line 21807
exit{null},//line 21808


























</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>






***//line 22321

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>







***//line 22389


</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 23410

//+1[特殊功能](Spec)//line 23412

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 24291

//无特殊功能//line 24293

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 24677

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>









$If(f[2][0]:05 && f[2][1]:71 && f[2][2]:03 && f[2][3]:af && f[2][4]:00 && f[2][5]:00);//line 24691



$Elseif(f[2][0]:05 && f[2][1]:71 && f[2][2]:03 && f[2][3]:af && f[2][4]:00 && f[2][5]:ff);//line 24695



$Elseif(f[2][0]:05 && f[2][1]:71 && f[2][2]:03 && f[2][3]:af && f[2][4]:00 && f[2][5]:02);//line 24699



$Else();//line 24703




</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S333_RW_NEW550HYBRID_PDC(){}//line 25092
$Init();//line 25093
CAN,11,500K,pin:6+14,F420/F520/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 25094
in{10 03},//line 25095
link{3e 00}1,3000ms,//line 25096
exit{null},//line 25097
$$$//line 25098

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S334_RW_NEW550HYBRID_RS(){}//line 25100
$Init();//line 25101
CAN,11,500K,pin:6+14,F420/F520/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 25102
in{10 03},//line 25103
link{3e 00}1,3000ms,//line 25104
exit{null},//line 25105
$$$//line 25106

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 27234

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S351_null(){}//line 28130
$Init();//line 28131
$$$//line 28132

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$Act();//line 28537
*"喇叭",//line 28538




***//line 28546

//+1[特殊功能](Spec)//line 28548

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$Display(EE){//line 29867
"该功能将完成发动机管理系统(ECM)中下述自适应值重置:",//line 29868
"1.重置节气门自适应值",//line 29869
"2.重置怠速转速自适应值",//line 29870
"3.重置爆震控制自适应值",//line 29871
"4.重置爆震点火时间自适应值",//line 29872
"5.重置燃油调整自适应值",//line 29873
"6.重置歧管绝对压力修正",//line 29874









***//line 29893

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>










***//line 29925

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S374_null(){}//line 29927
$Init();//line 29928
$$$//line 29929

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>





//+1[动作测试](Spec)//line 30247



$$$//line 30277


</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>





//+1[动作测试](Spec)//line 30332



$$$//line 30372


</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S380_null(){}//line 30375
$Init();//line 30376
$$$//line 30377

</RA ZJZO AB LJEY NINI>


[If TSJQ MCVN BRTZ MSOX]f[1][4]&0x07:01);$Display(EXIT<--$Elseif(f[1][4]&0x07:01);$Display(EXIT){"例程失败"}//line 30428
[If TSJQ MCVN BRTZ MSOX]f[1][4]&0x03:03);$Display(EXIT<--$Elseif(f[1][4]&0x03:03);$Display(EXIT){"例程失败,原因是:ABS/SCS泵马达状态异常"}//line 30429
[If TSJQ MCVN BRTZ MSOX]f[1][4]&0x07:05);$Display(EXIT<--$Elseif(f[1][4]&0x07:05);$Display(EXIT){"例程失败,原因是:ABS/SCS BLS状态异常"}//line 30430

<ZJZJ LJEY ZD VODY DK ACUN BQEO>
//密码未核对//line 30416










































$Init(reset);//line 30492






//+2[偏航传感器校准]//line 30499


</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S382_null(){}//line 30502
$Init();//line 30503
$$$//line 30504

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S390_null(){}//line 30999
$Init();//line 31000
$$$//line 31001

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>




//+1[动作测试](Spec)//line 31030


$Act();//line 31033
*"所有警告指示灯被点亮或熄灭",//line 31034
"打开"{2f d1 01 03 80 00 00 00 80 00 00 00}//line 31035
"关闭"{2f d1 01 03 00 00 00 00 80 00 00 00}//line 31036

$$$//line 31038

//+1[特殊功能]//密码待核对//line 31040
//+2[保养间隔复位]//line 31041
//+2[仪表自测试]//line 31042

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e0 && f[1][5]:10);//line 31280

$Else();//line 31282






$If(f[2][1]:71 && f[2][2]:03 && f[2][3]:ac && f[2][4]:e1 && f[2][5]:10);//line 31289

$Else();//line 31291






$If(f[3][1]:71 && f[3][2]:03 && f[3][3]:ac && f[3][4]:e2 && f[3][5]:10);//line 31298

$Else();//line 31300













</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e7 && f[1][5]:10);//line 31325


$Else();//line 31328



</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e8 && f[1][5]:10);//line 31343


$Else();//line 31346



</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e4 && f[1][5]:10);//line 31361


$Else();//line 31364



</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e5 && f[1][5]:10);//line 31379


$Else();//line 31382



</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e6 && f[1][5]:10);//line 31397


$Else();//line 31400



</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e3 && f[1][5]:10);//line 31415


$Else();//line 31418



</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$Display(EE){//line 31516
"该功能将完成发动机管理系统(ECM)中下述自适应值重置:",//line 31517
"1.重置节气门自适应值",//line 31518
"2.重置怠速转速自适应值",//line 31519
"3.重置爆震控制自适应值",//line 31520
"4.重置爆震点火时间自适应值",//line 31521
"5.重置燃油调整自适应值",//line 31522
"6.重置歧管绝对压力修正",//line 31523








***//line 31536

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>









***//line 31558

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>








$If(f[1][1]:71 && f[1][2]:03 && f[1][3]:ac && f[1][4]:e0 && f[1][5]:10);//line 31709

$Else();//line 31711






$If(f[2][1]:71 && f[2][2]:03 && f[2][3]:ac && f[2][4]:e1 && f[2][5]:10);//line 31718

$Else();//line 31720









</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO><e400/e500/ffe0>
</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO> : $ClearDtc();//line 32865
<e400/e500/ffe0>{14 ff ff ff}<--

[ES DK BRTZ ACDI]{04}
<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>{04}
</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO> : $ClearDtc();//line 32896
{04}<--

[ES DK BRTZ ACDI]{04}
<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>{04}
</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO> : $ClearDtc();//line 33031
{04}<--

<RA ZJZO AB LJEY NINI>

_S411_null(){}//line 33183
$Init();//line 33184
$$$//line 33185

</RA ZJZO AB LJEY NINI>

[ES DK BRTZ ACDI]{04}
<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>{04}
</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO> : $ClearDtc();//line 33219
{04}<--

[ES DK BRTZ ACDI]{04}
<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>{04}
</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO> : $ClearDtc();//line 33237
{04}<--

<RA ZJZO AB LJEY NINI>

_S415_950(){}//950 2016 1.8 后部音频控制模块//line 33241
$Init();//line 33242
CAN,11,500K,pin:6+14,4920/a920/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 33243
in{3e 00},//line 33244
link{3e 00}1,3000ms,//line 33245
exit{null},//line 33246
$$$//line 33247

</RA ZJZO AB LJEY NINI>

[ES DK BRTZ ACDI]{04}
<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>{04}
</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO> : $ClearDtc();//line 33263
{04}<--

<RA ZJZO AB LJEY NINI>

_S417_950(){}//950 2016 1.8 HVAC控制模块//line 33267
$Init();//line 33268
CAN,11,500K,pin:6+14,4920/a920/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 33269
in{3e 00},//line 33270
link{3e 00}1,3000ms,//line 33271
exit{null},//line 33272
$$$//line 33273

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S418_950(){}//950 2016 1.8 座椅记忆控制模块//line 33275
$Init();//line 33276
CAN,11,500K,pin:6+14,4920/a920/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 33277
in{3e 00},//line 33278
link{3e 00}1,3000ms,//line 33279
exit{null},//line 33280
$$$//line 33281

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S419_950(){}//950 2016 1.8 后排座椅加热控制模块//line 33283
$Init();//line 33284
CAN,11,500K,pin:6+14,4920/a920/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 33285
in{3e 00},//line 33286
link{3e 00}1,3000ms,//line 33287
exit{null},//line 33288
$$$//line 33289

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S420_950(){}//950 2016 1.8 无钥匙进入控制模块//line 33291
$Init();//line 33292
CAN,11,500K,pin:6+14,4920/a920/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 33293
in{3e 00},//line 33294
link{3e 00}1,3000ms,//line 33295
exit{null},//line 33296
$$$//line 33297

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S421_950(){}//950 2016 1.8 驻车辅助控制模块//line 33299
$Init();//line 33300
CAN,11,500K,pin:6+14,4920/a920/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 33301
in{3e 00},//line 33302
link{3e 00}1,3000ms,//line 33303
exit{null},//line 33304
$$$//line 33305

</RA ZJZO AB LJEY NINI>

[ES DK BRTZ ACDI]{04}
<ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO>{04}
</ZJZJ ClearDtc TSJQ ZD VODY DK ACUN BQEO> : $ClearDtc();//line 34297
{04}<--

<RA ZJZO AB LJEY NINI>

_S433_null(){}//line 34679
$Init();//line 34680
$$$//line 34681

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S434_null(){}//line 34683
$Init();//line 34684
$$$//line 34685


</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S436_null(){}//line 34747
$Init();//line 34748
$$$//line 34749

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S440_null(){}//line 34936
$Init();//line 34937
$$$//line 34938

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S441_null(){}//line 34940
$Init();//line 34941
$$$//line 34942

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S444_null(){}//line 35127
$Init();//line 35128
$$$//line 35129

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$Act();//line 35192
*"前照灯水平调节电机位置控制",//line 35193




***//line 35202
$$$//line 35203
//+1[特殊功能](Spec)//line 35204

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

[ACUN EBPJ]*"左设定温度",					        {22 64 0a},3f,d4,'00:低','01:16','02:17','03:18','04:19','05:20','06:21','07:22','08:23','09:24','0a:25','0b:26','0c:27','0d:28','0e-0f:-','oth:发送数据出错'10 循环;//line 35500
[ACUN EBPJ]*"右设定温度",					        {22 64 0b},3f,d4,'00:低','01:16','02:17','03:18','04:19','05:20','06:21','07:22','08:23','09:24','0a:25','0b:26','0c:27','0d:28','0e-0f:-','oth:发送数据出错'10 循环;//line 35501

<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 35565
//无特殊功能//line 35566

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S448_null(){}//line 35568
$Init();//line 35569
$$$//line 35570

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 35684
//+1[特殊功能](Spec)//line 35685

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 37630
//+1[特殊功能](Spec)//line 37631


</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S451_null(){}//line 37634
$Init();//line 37635
$$$//line 37636

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 38866
//无特殊功能//line 38867

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$Act();//line 39073
*"通道开关",//line 39074





***//line 39083

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>






$Act();//line 39359
*"乘客车辆-公制(标准负荷)",//line 39360


*"欧洲公制(标准负荷)",//line 39363


*"公制辅助负荷",//line 39366


*"欧洲公制(辅助负荷/加强)",//line 39369


*"负荷范围C",//line 39372


*"负荷范围D",//line 39375


*"负荷范围E",//line 39378

***//line 39380


</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 40453
//+1[特殊功能](Spec)//line 40454

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 41011

//+1[特殊功能](Spec)//line 41013

</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 41503

//+1[特殊功能](Spec)//line 41505

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S483_null(){电动助力转向}//line 41667
$Init();//line 41668
$$$//line 41669

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>



$Init();//line 41815
CAN,11,500K,pin:1+9,f080/f180/ffe0,30帧{30 00 00},period:0/2000/100/0/6000,//line 41816
in{10 01}/{22 f1 91},//line 41817
link{3e 00}1,3000ms,//line 41818
exit{null},//line 41819




</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>


$$$//line 42038



</ZJZJ LJEY ZD VODY DK ACUN BQEO>

[ACUN EBPJ]*"发动机关闭时间",                        {22 b1 16},3c,d4d5d6d7,0.1,"秒",'00000000-7fffff40:d4*8388608+d5*32768+d6*128+d7*0.5','oth:--';//line 42245
[ACUN EBPJ]*"推进系统关闭时间(汽油缸内直喷)",        {22 b1 17},3c,d4d5d6d7,0.1,"秒",'00000000-7fffff40:d4*8388608+d5*32768+d6*128+d7*0.5','oth:--';//line 42246


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

$Act();//line 43066
*"紧急关闭输入",//line 43067




***//line 43075


</ZJZJ LJEY ZD VODY DK ACUN BQEO>

[ACUN EBPJ]*"日期时间信息(时-分-秒)",               {22 b0 6d},2f,d7-d9s,":",d7-d9f,":",d7-d9m;//line 43697

<RA ZJZO AB LJEY NINI>

_S512_null(){}//line 44861
$Init();//line 44862
$$$//line 44863

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S513_null(){}//line 44865
$Init();//line 44866
$$$//line 44867

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S514_null(){}//line 44869
$Init();//line 44870
$$$//line 44871

</RA ZJZO AB LJEY NINI>

[ACUN EBPJ]*"日期时间信息(时-分-秒)",               {22 b0 6d},2f,d7-d9s,":",d7-d9f,":",d7-d9m;//line 44960


<ZJZJ LJEY ZD VODY DK ACUN BQEO>















$If(f[0][4]:01)//line 45507


$Else();//line 45512








$If(f[0][4]:01)//line 45531


$Else();//line 45536








$If(f[0][4]:01)//line 45555


$Else();//line 45560








$If(f[0][4]:01)//line 45579


$Else();//line 45584





$Sned(){11 01};//line 45600

$Sned(){10 03};//line 45602
$Sned(){14 ff ff ff};//line 45603



</ZJZJ LJEY ZD VODY DK ACUN BQEO>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>

//+2[GW设定电源模式](Spec)//未找到对应操作成功的赋值//line 47316



















$$$//line 47348

//+2[网关电池ID写入](Spec)//未找到对应操作成功的赋值//line 47350










$$$//line 47367

</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<ZJZJ LJEY ZD VODY DK ACUN BQEO>









$If(f[0][5]:ff)//line 47381


$Elseif(f[0][5]:00)//line 47384


$Else();//line 47397



</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S537_null(){}//line 47975
$Init();//line 47976
$$$//line 47977

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S538_null(){}//line 47979
$Init();//line 47980
$$$//line 47981

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S539_null(){}//line 47983
$Init();//line 47984
$$$//line 47985

</RA ZJZO AB LJEY NINI>


<ZJZJ LJEY ZD VODY DK ACUN BQEO>










//+1[特殊功能](+)$$$//line 49837
//+2[EPS(电子助力转向)](Spec)//line 49838







$$$//line 49856


</ZJZJ LJEY ZD VODY DK ACUN BQEO>

<RA ZJZO AB LJEY NINI>

_S562_null(){}//line 50960
$Init();//line 50961
$$$//line 50962

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S563_null(){}//line 50964
$Init();//line 50965
$$$//line 50966

</RA ZJZO AB LJEY NINI>

<RA ZJZO AB LJEY NINI>

_S564_null(){}//line 50968
$Init();//line 50969
$$$//line 50970

</RA ZJZO AB LJEY NINI>

[ACUN EBPJ]*"变速箱油温状态",                    {22 b0 93},3f,d4d5d6d7,'0000000f:不支持','000000aa:有效','000000c3:非准确状态','000000f0:初始化','000000ff:无效','oth:---';//line 53990
[ACUN EBPJ]*"选档电机实际电压状态",              {22 b0 94},3f,d4d5d6d7,'0000000f:不支持','000000aa:有效','000000c3:非准确状态','000000f0:初始化','000000ff:无效','oth:---';//line 53991
[ACUN EBPJ]*"换挡电机实际电压状态",              {22 b0 95},3f,d4d5d6d7,'0000000f:不支持','000000aa:有效','000000c3:非准确状态','000000f0:初始化','000000ff:无效','oth:---';//line 53992
[ACUN EBPJ]*"离合器电机实际电压状态",            {22 b0 96},3f,d4d5d6d7,'0000000f:不支持','000000aa:有效','000000c3:非准确状态','000000f0:初始化','000000ff:无效','oth:---';//line 53993

<RA ZJZO AB LJEY NINI>

_S602_null(){}//line 55857
$Init();//line 55858
$$$//line 55859


//根据 北汽EU400_2+10_500 编写--微信售后--220422//line 55862
</RA ZJZO AB LJEY NINI>

[ACUN EBPJ]*"电池实际功率",                {22 f0 51},3f,d4,'0:00','22:-2','6:-6','oth:999';//line 56486