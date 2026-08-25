package com.wealthops.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/incidents")
@CrossOrigin(origins = "http://localhost:4200")
public class IncidentController {

    @GetMapping
    public List<Map<String, Object>> getIncidents() {

        return List.of(

                Map.of(
                        "id", "INC-10024",
                        "title", "Pricing Data Feed Failure",
                        "service", "Pricing Service",
                        "severity", "High",
                        "status", "In Progress",
                        "assignedTo", "Market Data Support",
                        "createdAt", "10:32 AM",
                        "description", "Scheduled pricing import failed after repeated upstream connection timeouts."
                ),

                Map.of(
                        "id", "INC-10023",
                        "title", "Portfolio Sync Delay",
                        "service", "Portfolio Service",
                        "severity", "Medium",
                        "status", "Investigating",
                        "assignedTo", "Investment Operations",
                        "createdAt", "09:15 AM",
                        "description", "Portfolio synchronization exceeded the expected processing window."
                ),

                Map.of(
                        "id", "INC-10022",
                        "title", "Report Generation Error",
                        "service", "Reporting Service",
                        "severity", "High",
                        "status", "Open",
                        "assignedTo", "Reporting Support",
                        "createdAt", "08:47 AM",
                        "description", "Scheduled client report generation terminated before completion."
                )
        );
    }
}