const REGULATION_TYPES = {
  'petroleum': 'Petroleum',
  'greenhouse_gas': 'Greenhouse Gas'
};

const PETROLEUM_ACTIVITY_TYPES = {
  '1001': 'Operation of a facility',
  '1002': 'Storage, processing or transport of petroleum',
  '1003': 'Operation of a petroleum pipeline',
  '1004': 'Construction and installation of a facility',
  '1005': 'Construction and installation of a pipeline',
  '1006': 'Decommissioning, dismantling or removing a facility',
  '1007': 'Decommissioning, dismantling or removing a pipeline',
  '1008': 'Significant modification of a facility',
  '1009': 'Significant modification of a petroleum pipeline',
  '1010': 'Drilling',
  '1011': 'Seismic survey',
  '1012': 'Other survey',
  '1013': 'Any other petroleum-related activity'
};

const GREENHOUSE_GAS_ACTIVITY_TYPES = {
  '2001': 'Injection and storage of greenhouse gas',
  '2002': 'Operation of a facility',
  '2003': 'Operation of a greenhouse gas pipeline',
  '2004': 'Construction and installation of a facility',
  '2005': 'Construction and installation of a pipeline',
  '2006': 'Decommissioning, dismantling or removing a facility',
  '2007': 'Decommissioning, dismantling or removing a pipeline',
  '2008': 'Significant modification of a facility',
  '2009': 'Significant modification of a greenhouse gas pipeline',
  '2010': 'Drilling',
  '2011': 'Seismic survey',
  '2012': 'Other survey',
  '2013': 'Any other greenhouse gas-related activity'
};

export default {
  REGULATION_TYPES: REGULATION_TYPES,
  PETROLEUM_ACTIVITY_TYPES: PETROLEUM_ACTIVITY_TYPES,
  GREENHOUSE_GAS_ACTIVITY_TYPES: GREENHOUSE_GAS_ACTIVITY_TYPES
};
