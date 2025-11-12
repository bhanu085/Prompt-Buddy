# Load SharePoint PowerShell snap-in if not already loaded
if ((Get-PSSnapin -Name Microsoft.SharePoint.PowerShell -ErrorAction SilentlyContinue) -eq $null) {
    Add-PSSnapin Microsoft.SharePoint.PowerShell
}

# Output file path (optional)
$outputFile = "C:\SiteCollectionAdmins.csv"

# Prepare array to store results
$results = @()

# Get all web applications
$webApps = Get-SPWebApplication

foreach ($webApp in $webApps) {
    Write-Host "Processing Web Application:" $webApp.Url -ForegroundColor Cyan
    
    # Get all site collections in the web application
    $siteCollections = Get-SPSite -WebApplication $webApp.Url -Limit All
    
    foreach ($site in $siteCollections) {
        Write-Host "  Checking Site Collection:" $site.Url -ForegroundColor Yellow
        
        try {
            # Get primary and secondary admins
            $primaryAdmin = $site.Owner
            $secondaryAdmin = $site.SecondaryContact
            
            # Get all site collection admins explicitly assigned
            $adminUsers = $site.RootWeb.SiteAdministrators

            foreach ($admin in $adminUsers) {
                $results += [PSCustomObject]@{
                    WebApplication     = $webApp.Url
                    SiteCollectionURL  = $site.Url
                    AdminLogin         = $admin.LoginName
                    AdminDisplayName   = $admin.DisplayName
                    AdminEmail         = $admin.Email
                    PrimaryAdmin       = $primaryAdmin.LoginName
                    SecondaryAdmin     = $secondaryAdmin.LoginName
                }
            }
        }
        catch {
            Write-Host "  Error retrieving admins for $($site.Url): $_" -ForegroundColor Red
        }
        finally {
            $site.Dispose()
        }
    }
}

# Export to CSV
$results | Export-Csv -Path $outputFile -NoTypeInformation -Encoding UTF8

Write-Host "Report generated successfully at: $outputFile" -ForegroundColor Green
