package com.ada.apjba.web.rest;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/apj-ba")
public class ApjbaResource {

    @GetMapping("/scenarios/data")
    public String getDetails() throws Exception {
    //creating json object result
        JSONObject result = new JSONObject();
        result.put("name","Pruthvi");
        result.put("owner","Pruthvi");
        result.put("type","hjfgjg");
        result.put("periods", 5);
        result.put(" periodsPerYear", 6);
        result.put("startYear", 1968);
        result.put("startPeriod", 2);
        result.put("cost",1232341);
        result.put("costNPV",1232341);
        result.put("operationalCost",123131321 );
        result.put("operationalCostNPV",1233345656);
        result.put("lastSaved","16/07/23");

        //creating json object result 2
        JSONObject result1 = new JSONObject();
        result1.put("name","Pruthvi");
        result1.put("owner","Pruthvi");
        result1.put("type","hjfgjg");
        result1.put("periods", 5);
        result1.put(" periodsPerYear", 6);
        result1.put("startYear", 1968);
        result1.put("startPeriod", 2);
        result1.put("cost",1232341);
        result1.put("costNPV",1232341);
        result1.put("operationalCost",123131321 );
        result1.put("operationalCostNPV",1233345656);
        result1.put("lastSaved","16/07/23");





//        String str1="{\n" +
//            "        \"owner\": \"venkatesh\",\n" +
//            "        \"name\": \"venky\",\n" +
//            "        \" startPeriod\": 4,\n" +
//            "        \" numberOfPeriods\": 7,\n" +
//            "        \"  periodsPerYear\": 8,\n" +
//            "        \" startYear\": 1969\n" +
//            "        \"netPresentValueTotalOperationalCost\": 1233345657,\n" +
//            "        \" netPresentValueTotalInvestmentCost \": 1232342,\n" +
//            "        \"totalInvestment\": 1232342,\n" +
//            "        \"type\": \"type1\",\n" +
//            "        \"operationalCost\": 123131322\n" +
//            "\"lastSaved\": \"12/07/2023\n" +
//            "    }";
//        String str2="{\n" +
//            "        \"owner\": \"venkatesh\",\n" +
//            "        \"name\": \"venky\",\n" +
//            "        \" startPeriod\": 4,\n" +
//            "        \" numberOfPeriods\": 7,\n" +
//            "        \"  periodsPerYear\": 8,\n" +
//            "        \" startYear\": 1969\n" +
//            "        \"netPresentValueTotalOperationalCost\": 1233345657,\n" +
//            "        \" netPresentValueTotalInvestmentCost \": 1232342,\n" +
//            "        \"totalInvestment\": 1232342,\n" +
//            "        \"type\": \"type1\",\n" +
//            "        \"operationalCost\": 123131322\n" +
//            "\"lastSaved\": \"12/07/2023\n" +
//            "    }";
//        JSONObject json1 = new JSONObject(str1);
//        JSONObject json2 = new JSONObject(str2);
        JSONArray jsonArray=new JSONArray();
//        jsonArray.put(json1);
//        jsonArray.put(json2);
        jsonArray.put(result);
        jsonArray.put(result1);
        return jsonArray.toString();

    }

}
