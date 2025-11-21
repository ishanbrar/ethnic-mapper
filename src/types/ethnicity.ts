export type Ethnicity = {
  id: string;
  ethnicityName: string;
  region: string;
  fact1: string;
  fact2: string;
  /**
   * Optional approximate share (0–1) of this group in the region being described.
   * Used for ordering and context in multi-ethnic regions like major cities.
   */
  share?: number;
  /**
   * Optional descriptive demographic fields. These are intentionally strings so
   * they can encode approximate values (e.g. "≈ 12M", "US$18k") rather than
   * falsely precise numbers.
   */
  population?: string;
  dominantReligion?: string;
  totalFertilityRate?: string;
  /**
   * Optional prevalent languages spoken by this ethnic group.
   */
  languages?: string;
  /**
   * Optional string of flag emojis describing the geographic footprint of the region.
   */
  regionFlags?: string;
};



