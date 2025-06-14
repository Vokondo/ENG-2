
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Settings, Play, Pause, MoreHorizontal } from "lucide-react";

const Retailers = () => {
  const retailers = [
    {
      id: 1,
      name: "Amazon",
      domain: "amazon.com",
      status: "active",
      products: 456,
      lastScrape: "2 hours ago",
      success: 98.2,
      avgResponse: "1.2s"
    },
    {
      id: 2,
      name: "Best Buy",
      domain: "bestbuy.com",
      status: "active",
      products: 234,
      lastScrape: "1 hour ago",
      success: 95.8,
      avgResponse: "0.8s"
    },
    {
      id: 3,
      name: "Walmart",
      domain: "walmart.com",
      status: "paused",
      products: 567,
      lastScrape: "6 hours ago",
      success: 92.1,
      avgResponse: "2.1s"
    },
    {
      id: 4,
      name: "Target",
      domain: "target.com",
      status: "active",
      products: 123,
      lastScrape: "30 minutes ago",
      success: 97.5,
      avgResponse: "1.5s"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Retailer Management</h1>
          <p className="text-muted-foreground">
            Configure and monitor scraping settings for each retailer
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Global Settings
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Retailer
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Retailers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">3 paused</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96.2%</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,380</div>
            <p className="text-xs text-muted-foreground">Across all retailers</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.4s</div>
            <p className="text-xs text-muted-foreground">Network latency</p>
          </CardContent>
        </Card>
      </div>

      {/* Retailers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Retailer Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Retailer</TableHead>
                  <TableHead>Domain</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead>Last Scrape</TableHead>
                  <TableHead>Success Rate</TableHead>
                  <TableHead>Avg Response</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {retailers.map((retailer) => (
                  <TableRow key={retailer.id}>
                    <TableCell className="font-medium">{retailer.name}</TableCell>
                    <TableCell className="text-muted-foreground">{retailer.domain}</TableCell>
                    <TableCell>
                      <Badge variant={retailer.status === "active" ? "default" : "secondary"}>
                        {retailer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{retailer.products}</TableCell>
                    <TableCell className="text-muted-foreground">{retailer.lastScrape}</TableCell>
                    <TableCell>
                      <span className={retailer.success > 95 ? "text-green-600" : "text-yellow-600"}>
                        {retailer.success}%
                      </span>
                    </TableCell>
                    <TableCell>{retailer.avgResponse}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          {retailer.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Retailers;
