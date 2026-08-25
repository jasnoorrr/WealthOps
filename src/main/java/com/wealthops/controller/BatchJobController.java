package com.wealthops.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/batch-jobs")
@CrossOrigin(origins = "http://localhost:4200")
public class BatchJobController {

    @GetMapping
    public List<Map<String, Object>> getBatchJobs() {

        return List.of(

                Map.of(
                        "id", "JOB-001",
                        "name", "Portfolio Sync",
                        "system", "Portfolio Service",
                        "status", "Success",
                        "lastRun", "10:00 AM",
                        "duration", "2m 14s",
                        "nextRun", "11:00 AM",
                        "owner", "Investment Ops"
                ),

                Map.of(
                        "id", "JOB-002",
                        "name", "Pricing Feed Import",
                        "system", "Pricing Service",
                        "status", "Failed",
                        "lastRun", "10:15 AM",
                        "duration", "48s",
                        "nextRun", "10:45 AM",
                        "owner", "Market Data"
                ),

                Map.of(
                        "id", "JOB-003",
                        "name", "Holdings Reconciliation",
                        "system", "Reconciliation Engine",
                        "status", "Running",
                        "lastRun", "10:25 AM",
                        "duration", "4m 06s",
                        "nextRun", "12:00 PM",
                        "owner", "Operations"
                ),

                Map.of(
                        "id", "JOB-004",
                        "name", "Client Reporting",
                        "system", "Reporting Service",
                        "status", "Success",
                        "lastRun", "09:30 AM",
                        "duration", "3m 42s",
                        "nextRun", "1:30 PM",
                        "owner", "Reporting"
                )
        );
    }
}