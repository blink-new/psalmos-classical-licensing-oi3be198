import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { CreditCard, Download, Calendar, Receipt, AlertCircle, CheckCircle } from 'lucide-react'
import { blink } from '@/blink/client'

interface BillingProps {
  user: any
}

interface Invoice {
  id: string
  date: string
  amount: number
  status: 'paid' | 'pending' | 'failed'
  plan: string
  downloadUrl?: string
}

interface Subscription {
  id: string
  plan: string
  status: 'active' | 'cancelled' | 'past_due'
  currentPeriodStart: string
  currentPeriodEnd: string
  cancelAtPeriodEnd: boolean
  price: number
}

export function Billing({ user }: BillingProps) {
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [usage, setUsage] = useState({
    downloadsUsed: 45,
    downloadsLimit: 100,
    storageUsed: 2.3,
    storageLimit: 10
  })

  useEffect(() => {
    loadBillingData()
  }, [user])

  const loadBillingData = async () => {
    try {
      setLoading(true)
      
      // Mock subscription data
      const mockSubscription: Subscription = {
        id: 'sub_1234567890',
        plan: 'Pro',
        status: 'active',
        currentPeriodStart: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
        currentPeriodEnd: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
        cancelAtPeriodEnd: false,
        price: 49
      }
      
      // Mock invoice data
      const mockInvoices: Invoice[] = [
        {
          id: 'inv_001',
          date: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
          amount: 49,
          status: 'paid',
          plan: 'Pro Plan',
          downloadUrl: 'https://example.com/invoice/inv_001.pdf'
        },
        {
          id: 'inv_002',
          date: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
          amount: 49,
          status: 'paid',
          plan: 'Pro Plan',
          downloadUrl: 'https://example.com/invoice/inv_002.pdf'
        },
        {
          id: 'inv_003',
          date: new Date(Date.now() - 75 * 24 * 60 * 60 * 1000).toISOString(),
          amount: 29,
          status: 'paid',
          plan: 'Starter Plan',
          downloadUrl: 'https://example.com/invoice/inv_003.pdf'
        }
      ]
      
      setSubscription(mockSubscription)
      setInvoices(mockInvoices)
      
    } catch (error) {
      console.error('Error loading billing data:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'paid':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'failed':
      case 'past_due':
        return 'bg-red-100 text-red-800'
      case 'cancelled':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleCancelSubscription = async () => {
    if (window.confirm('Are you sure you want to cancel your subscription? You will lose access to premium features at the end of your billing period.')) {
      try {
        // In a real app, you'd call your billing API
        console.log('Subscription cancellation requested')
        // Update local state
        if (subscription) {
          setSubscription({ ...subscription, cancelAtPeriodEnd: true })
        }
      } catch (error) {
        console.error('Error cancelling subscription:', error)
      }
    }
  }

  const handleReactivateSubscription = async () => {
    try {
      // In a real app, you'd call your billing API
      console.log('Subscription reactivation requested')
      // Update local state
      if (subscription) {
        setSubscription({ ...subscription, cancelAtPeriodEnd: false })
      }
    } catch (error) {
      console.error('Error reactivating subscription:', error)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading billing information...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-primary mb-2">Billing & Subscription</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information</p>
      </div>

      <Tabs defaultValue="subscription" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription" className="space-y-6">
          {/* Current Subscription */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Current Subscription
              </CardTitle>
              <CardDescription>
                Manage your current plan and billing details
              </CardDescription>
            </CardHeader>
            <CardContent>
              {subscription ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{subscription.plan} Plan</h3>
                      <p className="text-muted-foreground">
                        {formatCurrency(subscription.price)}/month
                      </p>
                    </div>
                    <Badge className={getStatusColor(subscription.status)}>
                      {subscription.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Billing Period</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatDate(subscription.currentPeriodStart)} - {formatDate(subscription.currentPeriodEnd)}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Next Payment</h4>
                      <p className="text-sm text-muted-foreground">
                        {subscription.cancelAtPeriodEnd 
                          ? 'Subscription will end on ' + formatDate(subscription.currentPeriodEnd)
                          : formatCurrency(subscription.price) + ' on ' + formatDate(subscription.currentPeriodEnd)
                        }
                      </p>
                    </div>
                  </div>

                  {subscription.cancelAtPeriodEnd && (
                    <div className="flex items-center gap-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-medium text-yellow-800">Subscription Cancelled</p>
                        <p className="text-sm text-yellow-700">
                          Your subscription will end on {formatDate(subscription.currentPeriodEnd)}. 
                          You can reactivate it anytime before then.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                      Upgrade Plan
                    </Button>
                    {subscription.cancelAtPeriodEnd ? (
                      <Button 
                        variant="outline" 
                        onClick={handleReactivateSubscription}
                      >
                        Reactivate Subscription
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        onClick={handleCancelSubscription}
                      >
                        Cancel Subscription
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCard className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Active Subscription</h3>
                  <p className="text-muted-foreground mb-4">
                    Subscribe to access our full catalog of classical music
                  </p>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Choose a Plan
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>
                Manage your payment methods and billing address
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-muted-foreground">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Downloads Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Downloads
                </CardTitle>
                <CardDescription>
                  Track your monthly download usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{usage.downloadsUsed}</span>
                    <span className="text-muted-foreground">of {usage.downloadsLimit}</span>
                  </div>
                  <Progress value={(usage.downloadsUsed / usage.downloadsLimit) * 100} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {usage.downloadsLimit - usage.downloadsUsed} downloads remaining this month
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Storage Usage */}
            <Card>
              <CardHeader>
                <CardTitle>Storage</CardTitle>
                <CardDescription>
                  Your personal music library storage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{usage.storageUsed} GB</span>
                    <span className="text-muted-foreground">of {usage.storageLimit} GB</span>
                  </div>
                  <Progress value={(usage.storageUsed / usage.storageLimit) * 100} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {(usage.storageLimit - usage.storageUsed).toFixed(1)} GB available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Usage History */}
          <Card>
            <CardHeader>
              <CardTitle>Usage History</CardTitle>
              <CardDescription>
                Your download activity over the past months
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-sm text-muted-foreground">This Month</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold">67</p>
                    <p className="text-sm text-muted-foreground">Last Month</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <p className="text-2xl font-bold">234</p>
                    <p className="text-sm text-muted-foreground">All Time</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                Invoice History
              </CardTitle>
              <CardDescription>
                Download and manage your billing invoices
              </CardDescription>
            </CardHeader>
            <CardContent>
              {invoices.length === 0 ? (
                <div className="text-center py-8">
                  <Receipt className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No invoices yet</h3>
                  <p className="text-muted-foreground">
                    Your billing history will appear here once you have a subscription
                  </p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{formatDate(invoice.date)}</TableCell>
                        <TableCell>{invoice.plan}</TableCell>
                        <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(invoice.status)}>
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}